import React from 'react';
import jsonData from '../data/db.json';
import { useUserContext } from '../components/UserContext';

function Test() {
  const { user } = useUserContext();
  const targetEmail = user.email;
  // Find the user with the specified email
  const targetUser = jsonData.users.find((user) => user.email === targetEmail);
  if (!targetUser) {
    return <div>User not found</div>;
  }

  // Get the date of the first time entry (if it exists)
  const userPassword = targetUser.time_entries.length > 0 && targetUser.time_entries[0].date;

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

        <h3>Time Entries:</h3>
        <ul>
          {targetUser.time_entries.map((entry, index) => (
            <li key={index}>
              <p><strong>Date:</strong> {entry.date}</p>
              <p><strong>Time In:</strong> {entry.time_in}</p>
              <p><strong>Time Out:</strong> {entry.time_out}</p>
              <p><strong>Overtime Hours:</strong> {entry.overtime_hours}</p>
              <p><strong>Total Clock Hours:</strong> {entry.total_clock_hours}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Test;