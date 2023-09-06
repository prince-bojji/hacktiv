import React, { Component, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TimeTracker(props) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
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
      />
    </div>
  );
}

export default TimeTracker;
