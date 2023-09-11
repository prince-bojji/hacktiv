import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '/src/pages/Dashboard';
import EmployeeRequest from '/src/pages/EmployeeRequest';
import FileSystem from '/src/pages/FileSystem';
import FreedomBoard from '/src/pages/FreedomBoard';
import Login from '/src/pages/Login';
import ProjectEnlisting from '/src/pages/ProjectEnlisting';
import TimeTracker from '/src/pages/TimeTracker';
import NavBar from '/src/components/NavBar';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <>
      <BrowserRouter>
        {loggedIn ? (
          <NavBar>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/Dashboard' element={<Dashboard />} />
              <Route path='/TimeTracker' element={<TimeTracker />} />
              <Route path='/EmployeeRequest' element={<EmployeeRequest />} />
              <Route path='/ProjectEnlisting' element={<ProjectEnlisting />} />
              <Route path='/FileSystem' element={<FileSystem />} />
              <Route path='/FreedomBoard' element={<FreedomBoard />} />
            </Routes>
          </NavBar>
        ) : (
          <Routes>
            <Route
              path='/'
              element={<Login onLogin={handleLogin} />} 
            />
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;