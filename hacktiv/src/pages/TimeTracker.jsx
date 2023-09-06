import React, { useState, useEffect } from 'react';
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
    } else {
      setTimerRunning(false);
      setTimerValue(0);
      setStartTime(null);
    }
  };

  useEffect(() => {
    let timerInterval;
    if (timerRunning) {
      timerInterval = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = (currentTime - startTime) / 1000;
        setTimerValue(elapsedTime);
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [timerRunning, startTime]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((timeInSeconds % 3600) / 60).toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => props.onSearchChange(e.target.value)}
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            placeholderText="Select a date"
            style={{ marginRight: '10px' }}
          />
          <button
            onClick={startTimer}
            style={{
              backgroundColor: 'yellow',
              color: 'black',
            }}
          >
            {timerRunning ? 'Stop Timer' : 'Start Timer'}
          </button>
          <span style={{ marginLeft: '10px' }}>{formatTime(timerValue)}</span>
        </div>
      </div>
    </div>
  );
}

export default TimeTracker;
