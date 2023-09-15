import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsonData from '../data/db.json';
import { useUserContext } from '/src/components/UserContext';

import {
  FaRegClock,
  FaRegHourglass,
  FaRegMoon,
  FaRegCalendarTimes,
} from 'react-icons/fa';

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const targetEmail = user.email;

  const view = () => {
    navigate('/TimeTracker');
  };

  const currentDate = new Date();
  const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const targetUser = jsonData.users.find(user => user.email === targetEmail);

  const currDate = formattedDate;
  const filteredTimeEntries = targetUser.time_entries.filter(
    entry => entry.date === currDate
  );

  const timeIn =
    filteredTimeEntries.length > 0 && filteredTimeEntries[0].time_in;
  const timein = timeIn;
  const timeOut =
    filteredTimeEntries.length > 0 && filteredTimeEntries[0].time_out;
  const timeout = timeOut;
  const overTime =
    filteredTimeEntries.length > 0 && filteredTimeEntries[0].overtime_hours;
  const overtime = overTime + ' hrs';
  const date = formattedDate;
  const currentProject = targetUser.current_project;
  const clockhours =
    filteredTimeEntries.length > 0 && filteredTimeEntries[0].total_clock_hours;
  const projectpartipated = targetUser.projects_participated;

  const projects = [
    {
      id: 1,
      name: 'TableforJuan',
      status: 'Ongoing',
      deadline: '09/27/2023',
    },
    {
      id: 2,
      name: 'Agapsyon',
      status: 'Ongoing',
      deadline: '09/27/2023',
    },
  ];

  const totalProjects = projects.length;

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  function calculateTotalDuration(projects) {
    let totalMinutes = 0;

    for (const project of projects) {
      // Add any relevant logic here
    }

    const totalHours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;

    return `${totalHours.toString().padStart(2, '0')}:${remainingMinutes
      .toString()
      .padStart(2, '0')}`;
  }

  const totalDuration = calculateTotalDuration(projects);
  console.log('Total Duration for All Projects:', totalDuration);

  // Add here weekly duration per day
  const weeklyDuration = ['08:01', ''];

  return (
    <div className='font-inter'>
      {/* TILES */}
      <div className='grid  md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5'>
        <div className=' border border-tertiary-a rounded-2xl flex justify-between p-5'>
          <div>
            <p className='font-bold text-accent text-[24px]'>{timein}</p>
            <p className='text-tertiary-a text-[12px]'>Time-in</p>
          </div>
          <div className='flex items-center'>
            <FaRegClock className='fa-2xl text-tertiary-a' />
          </div>
        </div>
        <div className=' border border-tertiary-a rounded-2xl flex justify-between p-5'>
          <div>
            <p className='font-bold text-accent text-[24px]'>{timeout}</p>
            <p className='text-tertiary-a text-[12px]'>Time-out</p>
          </div>
          <div className='flex items-center'>
            <FaRegHourglass className='fa-2xl text-tertiary-a' />
          </div>
        </div>
        <div className=' border border-tertiary-a rounded-2xl flex justify-between p-5'>
          <div>
            <p className='font-bold text-accent text-[24px]'>{overtime}</p>
            <p className='text-tertiary-a text-[12px]'>Overtime</p>
          </div>
          <div className='flex items-center'>
            <FaRegMoon className='fa-2xl text-tertiary-a' />
          </div>
        </div>
        <div className='border border-tertiary-a rounded-2xl flex justify-between p-5'>
          <div>
            <p className='font-bold text-accent text-[24px]'>{date}</p>
            <p className='text-tertiary-a text-[12px]'>Date</p>
          </div>
          <div className='flex items-center'>
            <FaRegCalendarTimes className='fa-2xl text-tertiary-a' />
          </div>
        </div>
      </div>

      <div className='lg:flex flex-col md:flex-row justify-between mb-2'>
        {/* WEEKLY REPORT */}
        <div className='lg:w-[48%] lg:h-[40%] md:w-full mb-3 border border-tertiary-a rounded-2xl'>
          <div className='flex justify-between rounded-tl-2xl rounded-tr-2xl p-3 py-2 bg-accent-a'>
            <p className='font-bold text-teriary text-[16px]'>
              Attendance Report
            </p>
            <button
              className='flex items-center text-[#002db3] bg-transparent border-none outline-none cursor-pointer'
              onClick={view}>
              View
            </button>
          </div>
          <div className='px-5 py-2'>
            <ul>
              {filteredTimeEntries.map((entry, index) => (
                <li key={index}>
                  <p className='py-1'>
                    <strong>Date:</strong> {entry.date}
                  </p>
                  {entry.time_in && (
                    <p className='py-1'>
                      <strong>Time In:</strong> {entry.time_in}
                    </p>
                  )}
                  {entry.time_out && (
                    <p className='py-1'>
                      <strong>Time Out:</strong> {entry.time_out}
                    </p>
                  )}
                  <p className='py-1'>
                    <strong>Overtime Hours:</strong> {entry.overtime_hours}
                  </p>
                  <p>
                    <strong>Total Clock Hours:</strong>{' '}
                    {entry.total_clock_hours}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* OVERVIEW */}
        <div className='lg:w-[48%] mb-3 border border-tertiary rounded-2xl'>
          <div className='rounded-tl-2xl rounded-tr-2xl p-5 py-2 bg-accent-a'>
            <div className='font-bold text-teriary text-[16px]'>Overview</div>
          </div>

          <div className='px-5 py-2'>
            <div className=''>
              <div className=''>
                <p className='text-[14px] text-teriary'>Current Project</p>
                <p className='font-bold text-accent text-[20px] lg:ml-3 whitespace-nowrap'>
                  {currentProject}
                </p>
              </div>
            </div>

            <div className=''>
              <div className=''>
                <p className='text-[14px] text-teriary'>Clocked Hours</p>
                <p className='font-bold text-accent text-[20px] lg:ml-3 whitespace-nowrap'>
                  {clockhours}
                </p>
              </div>
            </div>

            <div className=''>
              <div className=''>
                <p className='text-[14px] text-teriary'>Project Participated</p>
                <p className='font-bold text-accent text-[20px] lg:ml-3 whitespace-nowrap'>
                  {projectpartipated}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div>
        <div className='w-full border border-tertiary-a rounded-2xl text-[14px] lg:text-[16px]'>
          <div className='flex justify-between rounded-tl-2xl rounded-tr-2xl p-5 py-4 bg-accent-a'>
            <p className='text-[16px] font-bold text-teriary'>Projects</p>
          </div>
          <div className='px-5 py-2'>
            <table className='w-full'>
              <thead>
                <tr className='text-left'>
                  <th>Project Name</th>
                  <th>Status</th>
                  <th>Deadline</th>
                </tr>
              </thead>
              <tbody className=''>
                {projects.map((project, index) => (
                  <tr
                    key={project.id}
                    className={` ${
                      index !== projects.length - 1 ? 'border-b' : ''
                    }`}>
                    <td className='py-2 px-1'>{project.name}</td>
                    <td className='py-2 px-1'>{project.status}</td>
                    <td className='py-2 px-1'>{project.deadline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
