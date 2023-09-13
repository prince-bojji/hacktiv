import React, { Component } from 'react';
import jsonData from '../data/db.json'; // Import the JSON data

class Test extends Component {
  render() {
    return (
      <div>
        <h1>User Data</h1>
        <ul>
          {jsonData.users.map((user) => (
            <li key={user.id}>
              <strong>Name:</strong> {user.name}<br />
              <strong>Email:</strong> {user.email}<br />
              <strong>Password:</strong> {user.password}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Test;
