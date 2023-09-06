import React, { Component, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TimeTracker(props) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerValue, setTimerValue] = useState(0);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const startTimer = () => {
    setTimerRunning(true);
    let startTime = Date.now();

    const timerInterval = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = (currentTime - startTime) / 1000;
      setTimerValue(elapsedTime);
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  return (
    <div>
      <div>
        <button onClick={timerRunning ? stopTimer : startTimer}>
          {timerRunning ? 'Stop Timer' : 'Start Timer'}
        </button>
        <span>Timer: {timerValue} seconds</span>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => props.onSearchChange(e.target.value)}
      />
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText="Select a date"
      />
    </div>
  );
}

export default TimeTracker;
