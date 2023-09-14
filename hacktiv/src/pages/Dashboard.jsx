import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom';

import 'chart.js/auto';

ChartJS.register(ArcElement, Tooltip, Legend);

import {
  FaRegClock,
  FaRegHourglass,
  FaRegMoon,
  FaRegCalendarTimes,
} from 'react-icons/fa';

function Dashboard() {
  const navigate = useNavigate();

  const view = () => {
    navigate('/TimeTracker');
  }

  // Add here calculation for the current time starting the time-in from the time tracker
  let currentSession = '4:53';

  // Replace this with the variable for the time-in from the time tracker
  const timeIn = '8:01';

  // Replace this with the value from the database
  const overtimes = 0;
  const leaves = 0;

  const projects = [
    {
      id: 1,
      name: 'TableforJuan',
      status: 'Ongoing',
      deadline: 'September 27, 2023',
    },
    {
      id: 2,
      name: 'Agapsyon',
      status: 'Ongoing',
      deadline: 'September 27, 2023',
    },
  ];

  const totalProjects = projects.length;
  console.log('Total Number of Projects:', totalProjects);

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentDate = new Date();

  // Calculate the dates for the current week in the desired format
  const dates = [];
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  for (let i = 0; i < 6; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);
    const formattedDate = date.toLocaleDateString(undefined, options);
    dates.push(formattedDate);
  }

  function calculateTotalDuration(projects) {
    let totalMinutes = 0;

    for (const project of projects) {
      // Add any relevant logic here if needed
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
            <p className='font-bold text-accent text-[24px]'>
              {currentSession}
            </p>
            <p className='text-tertiary-a text-[12px]'>Time-in</p>
          </div>
          <div className='flex items-center'>
            <FaRegClock className='fa-2xl text-tertiary-a' />
          </div>
        </div>
        <div className=' border border-tertiary-a rounded-2xl flex justify-between p-5'>
          <div>
            <p className='font-bold text-accent text-[24px]'>{timeIn}</p>
            <p className='text-tertiary-a text-[12px]'>Time-out</p>
          </div>
          <div className='flex items-center'>
            <FaRegHourglass className='fa-2xl text-tertiary-a' />
          </div>
        </div>
        <div className=' border border-tertiary-a rounded-2xl flex justify-between p-5'>
          <div>
            <p className='font-bold text-accent text-[24px]'>{overtimes}</p>
            <p className='text-tertiary-a text-[12px]'>Overtime</p>
          </div>
          <div className='flex items-center'>
            <FaRegMoon className='fa-2xl text-tertiary-a' />
          </div>
        </div>
        <div className='border border-tertiary-a rounded-2xl flex justify-between p-5'>
          <div>
            <p className='font-bold text-accent text-[24px]'>{leaves}</p>
            <p className='text-tertiary-a text-[12px]'>Leave</p>
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
            <p className='font-bold text-teriary text-[16px]'>Attendance Report</p>
            <button className='flex items-center text-[#002db3] bg-transparent border-none outline-none cursor-pointer'
            onClick={view}>
              View
            </button>
          </div>
          <div className='px-5 py-2'>
            <table className='w-full'>
              <thead>
                <tr className='font-bold text-left'>
                  <th className=''>Date</th>
                </tr>
              </thead>
              <tbody>
                {dates.map((formattedDate, index) => (
                  <tr
                    key={formattedDate}
                    className={`${
                      index !== dates.length - 1 ? 'border-b' : ''
                    }`}>
                    <td className='py-2 px-1'>{formattedDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                  {projects[0].name}
                </p>
              </div>
            </div>

            <div className=''>
              <div className='pt-[8%]'>
                <p className='text-[14px] text-teriary'>Clocked Hours</p>
                <p className='font-bold text-accent text-[20px] lg:ml-3 whitespace-nowrap'>
                  {totalDuration}
                </p>
              </div>
            </div>

            <div className=''>
              <div className='pt-[8%]'>
                <p className='text-[14px] text-teriary'>Project Participated</p>
                <p className='font-bold text-accent text-[20px] lg:ml-3 whitespace-nowrap'>
                  {totalProjects}
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
