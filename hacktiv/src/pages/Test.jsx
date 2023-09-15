import React from 'react';
import jsonData from '../data/db.json';

const targetEmail = "johanten222@gmail.com"; // Specify the target email
const currentDate = "09/15/2023"; // Specify the current date

function Test() {
  // Find the user with the specified email
  const targetUser = jsonData.users.find((user) => user.email === targetEmail);
  if (!targetUser) {
    return <div>User not found</div>;
  }

  //const userPassword = targetUser.password + "haha";
  // Get the date of the first time entry (if it exists)
  const userPassword = targetUser.time_entries.length > 0 && targetUser.time_entries[0].date;

  // Filter time entries based on the current date
  const filteredTimeEntries = targetUser.time_entries.filter((entry) => entry.date === currentDate);

  // Get the "Time In" value from the first filtered time entry (if it exists)
  const timeIn = filteredTimeEntries.length > 0 && filteredTimeEntries[0].time_in;

  return (
    <div>
      <h1>User Data</h1>
      <div key={targetUser.id}>
        <h2>{targetUser.name}</h2>
        <p><strong>Email:</strong> {targetUser.email}</p>
        <p><strong>Password:</strong> {userPassword}</p>
        <p><strong>Current Project:</strong> {targetUser.current_project}</p>
        <p><strong>Projects Participated:</strong> {targetUser.projects_participated}</p>

        <h1>Hatdog {userPassword}</h1>

        <h3>Time Entries for {currentDate}:</h3>
        <ul>
          {filteredTimeEntries.map((entry, index) => (
            <li key={index}>
              <p><strong>Date:</strong> {entry.date}</p>
              {entry.time_in && <p><strong>Time In:</strong> {entry.time_in}</p>}
              {entry.time_out && <p><strong>Time Out:</strong> {entry.time_out}</p>}
              <p><strong>Overtime Hours:</strong> {entry.overtime_hours}</p>
              <p><strong>Total Clock Hours:</strong> {entry.total_clock_hours}</p>
            </li>
          ))}
        </ul>

        {timeIn && (
          <div>
            <p><strong>Time In from the first entry:</strong> {timeIn}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Test;
