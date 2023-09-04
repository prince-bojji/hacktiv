import Dashboard from '/src/pages/Dashboard';
import EmployeeRequest from '/src/pages/EmployeeRequest';
import FileSystem from '/src/pages/FileSystem';
import FreedomBoard from '/src/pages/FreedomBoard';
import Landing from '/src/pages/Landing';
import Login from '/src/pages/Login';
import ProjectEnlisting from '/src/pages/ProjectEnlisting';
import TimeTracker from '/src/pages/TimeTracker';
import NavBar from '/src/components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
