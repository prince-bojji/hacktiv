import React, { useState } from 'react';

const TimeInOut = () => {
  const [isTimeIn, setIsTimeIn] = useState(true);
  const [timeIn, setTimeIn] = useState('');
  const [timeOut, setTimeOut] = useState('');

  const handleTimeInOut = () => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    if (isTimeIn) {
      setTimeIn(currentTime);
    } else {
      setTimeOut(currentTime);
    }
    setIsTimeIn(!isTimeIn);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Attendance</h1>
      <button
        onClick={handleTimeInOut}
        className={`w-full py-2 rounded-md text-white bg-[#FFDA55] hover:bg-[#fecf26] text-black px-5 rounded${
          isTimeIn ? 'bg-green-500' : 'bg-red-500'
        }`}
      >
        {isTimeIn ? 'Time In' : 'Time Out'}
      </button>
      <div className="flex justify-between mt-4">
        <div className="text-center">
          <p className="text-gray-600">Time in</p>
          <button
            onClick={handleTimeInOut}
            className={`py-2 rounded-md text-white ${
              isTimeIn ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
          </button>
          {timeIn && <p className="mt-2">{timeIn}</p>}
        </div>
        <div className="text-center">
          <p className="text-gray-600">Time out</p>
          <button
            onClick={handleTimeInOut}
            className={`py-2 rounded-md text-white ${
              isTimeIn ? 'bg-red-500' : 'bg-green-500'
            }`}
          >
          </button>
          {timeOut && <p className="mt-2">{timeOut}</p>}
        </div>
      </div>
    </div>
  );
};

export default TimeInOut;