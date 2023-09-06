import React from 'react'

function TimeTracker() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => props.onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default TimeTracker