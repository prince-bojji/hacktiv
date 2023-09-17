import React, { useState, useEffect } from 'react';
import { useUserContext } from '../components/UserContext';
import axios from 'axios';
import jsonData from '../data/db.json';

const TimeInOut = () => {
  const [isTimeIn, setIsTimeIn] = useState(true);
  const [timeIn, setTimeIn] = useState('');
  const [timeOut, setTimeOut] = useState('');
  const { user } = useUserContext();

  useEffect(() => {
    const savedTimeIn = localStorage.getItem('timeIn');
    const savedTimeOut = localStorage.getItem('timeOut');
    const hasTimeIn = localStorage.getItem('hasTimeIn');

    if (savedTimeIn) {
      setTimeIn(savedTimeIn);
    }

    if (savedTimeOut) {
      setTimeOut(savedTimeOut);
    }

    if (hasTimeIn === 'true') {
      setIsTimeIn(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('timeIn', timeIn);
  }, [timeIn]);

  useEffect(() => {
    localStorage.setItem('timeOut', timeOut);
  }, [timeOut]);

  const getCurrentUser = async () => {
    const targetEmail = user.email;
    try {
      const response = await axios.get('http://localhost:3000/users'); 
      const users = response.data;
      return users.find((user) => user.email === targetEmail);
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };

  const calculateHours = (timeIn, timeOut) => {
    if (!timeIn || !timeOut) {
      return { overtimeHours: 0, totalClockHours: 0 };
    }

    const timeInParts = timeIn.split(':');
    const timeOutParts = timeOut.split(':');

    if (timeInParts.length !== 2 || timeOutParts.length !== 2) {
      return { overtimeHours: 0, totalClockHours: 0 };
    }

    const timeInDate = new Date(0, 0, 0, parseInt(timeInParts[0]), parseInt(timeInParts[1]));
    const timeOutDate = new Date(0, 0, 0, parseInt(timeOutParts[0]), parseInt(timeOutParts[1]));

    const durationMillis = timeOutDate - timeInDate;
    const durationHours = durationMillis / (1000 * 60 * 60);

    let overtimeHours = 0;
    let totalClockHours = durationHours;

    if (durationHours > 8) {
      overtimeHours = durationHours - 8;
      totalClockHours = 8;
    }

    // Round totalClockHours to 2 decimal places
    totalClockHours = parseFloat(totalClockHours.toFixed(2));

    return { overtimeHours, totalClockHours };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentUser = await getCurrentUser();

    if (!currentUser) {
      console.error('User not found');
      return;
    }

    const { overtimeHours, totalClockHours } = calculateHours(timeIn, timeOut);

    const currentDate = new Date();
    const formattedDate = `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getDate().toString().padStart(2, '0')}/${currentDate.getFullYear()}`;

    const newTimeEntry = {
      date: formattedDate,
      time_in: timeIn,
      time_out: timeOut,
      overtime_hours: overtimeHours,
      total_clock_hours: totalClockHours,
    };

    currentUser.time_entries.push(newTimeEntry);

    try {
      await axios.put(`http://localhost:3000/users/${currentUser.id}`, currentUser);

      alert('Your attendance have been recorded!', newTimeEntry);

      setTimeIn('');
      setTimeOut('');
      setIsTimeIn(true);
      localStorage.setItem('hasTimeIn', 'false'); 
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleTimeInOut = () => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    if (isTimeIn) {
      setTimeIn(currentTime);
      localStorage.setItem('hasTimeIn', 'true'); 
    } else {
      if (timeIn && currentTime) {
        setTimeOut(currentTime);
      } else {
        console.error('Invalid timeIn or currentTime');
        return;
      }
    }

    setIsTimeIn(!isTimeIn);
  };

  return (
    <div className='w-full max-w-md mx-auto p-4'>
      <h1 className='text-4xl font-semibold mb-4 mx-auto flex items-center justify-center'>Attendance</h1>
      <button
        type='button'
        onClick={handleTimeInOut}
        className={`w-full py-2 rounded-md text-white bg-[#FFDA55] hover:bg-[#fecf26] text-black px-5 rounded${
          isTimeIn ? 'bg-green-500' : 'bg-red-500'
        }`}>
        {isTimeIn ? 'Time In' : 'Time Out'}
      </button>
      <div className='flex justify-between mt-4'>
        <div className='text-center'>
          <p className='text-gray-600'>Time in</p>
          <button
            onClick={handleTimeInOut}
            className={`py-2 rounded-md text-white ${
              isTimeIn ? 'bg-green-500' : 'bg-red-500'
            }`}></button>
          {timeIn && <p className='mt-2'>{timeIn}</p>}
        </div>
        <div className='text-center'>
          <p className='text-gray-600'>Time out</p>
          <button
            onClick={handleTimeInOut}
            className={`py-2 rounded-md text-white ${
              isTimeIn ? 'bg-red-500' : 'bg-green-500'
            }`}></button>
          {timeOut && <p className='mt-2'>{timeOut}</p>}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="mx-auto flex items-center justify-center bg-[#FFDA55] hover:bg-[#fecf26] text-black py-1 px-5 rounded">Save</button>
      </form>
    </div>
  );
};

export default TimeInOut;
