import React from 'react';
import TimeLogs from '../components/TimeLogs';
import Timer from '../components/Timer';

function TimeTracker() {
  return (
    <>
      <div className='font-inter'>
        <Timer />
        <TimeLogs />
      </div>
    </>
  );
}

export default TimeTracker;
