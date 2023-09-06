import React, { Component, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TimeTracker(props) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerValue, setTimerValue] = useState(0);

  const [startTime, setStartTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const startTimer = () => {
    if (!timerRunning) {
      setStartTime(Date.now());
      setTimerRunning(true);

      const timerInterval = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = (currentTime - startTime) / 1000;
        setTimerValue(elapsedTime);
      }, 1000);

      return () => {
        clearInterval(timerInterval);
      };
    } else {
      // Stop the timer if it's already running
      setTimerRunning(false);
      setTimerValue(0);
      setStartTime(null);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => props.onSearchChange(e.target.value)}
        />
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText="Select a date"
          style={{ marginLeft: '10px' }}
        />
        <button
          onClick={startTimer}
          style={{
            backgroundColor: 'yellow',
            color: 'black',
            marginLeft: '10px',
          }}
        >
          {timerRunning ? 'Stop Timer' : 'Start Timer'}
        </button>
        <span>
          {Math.floor(timerValue / 3600).toString().padStart(2, '0')}:
          {Math.floor((timerValue % 3600) / 60).toString().padStart(2, '0')}:
          {(timerValue % 60).toString().padStart(2, '0')} (hh:mm:ss)
        </span>
      </div>
    </div>
  );
}

export default TimeTracker;
