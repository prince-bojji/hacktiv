import React from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

import {Doughnut} from 'react-chartjs-2'

import 'chart.js/auto'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);



import {
  FaRegClock,
  FaRegHourglass,
  FaRegMoon,
  FaRegCalendarTimes,
  FaChevronLeft,
  FaChevronRight,
  FaRegWindowMaximize
} from 'react-icons/fa';

function Dashboard() {

  //Add here calculation for the current time starting the time-in from the time tracker
  let currentSession = '4:53' 

  //Replace this with the variable for the time-in from the time tracker 
  const timeIn = '8:01'

  //Replace this with the value from database 
  const overtimes = 1
  const leaves = 0

  const projects = [{
    id: 1,
    name: 'Time-in/Time-out',
    start: 'August 29, 2023',
    end: '',
    duration: '08:03'
  },
  {
    id: 2,
    name: 'El-Paraiso Website',
    start: 'August 09, 2023',
    end: 'August 27, 2023',
    duration: '32:42'
  },
  {
    id: 3,
    name: 'SHOT POS Terminal',
    start: 'July 23, 2023',
    end: 'August 07, 2023',
    duration: '25:37'
  },
  {
    id: 4,
    name: 'Crochet Corner Blogsite',
    start: 'June 30, 2023',
    end: 'July 20, 2023',
    duration: '44:51'
  },
]

  const totalProjects = projects.length;
  console.log("Total Number of Projects:", totalProjects);

  const customColors = [
    'rgba(255, 99, 132, 0.7)',   // Red
    'rgba(75, 192, 192, 0.7)',   // Green
    'rgba(255, 205, 86, 0.7)',   // Yellow
    'rgba(54, 162, 235, 0.7)',   // Blue
    'rgba(153, 102, 255, 0.7)',  // Purple
    'rgba(255, 159, 64, 0.7)',   // Orange
    'rgba(255, 0, 0, 0.7)',      // Bright Red
    'rgba(0, 255, 0, 0.7)',      // Bright Green
    'rgba(0, 0, 255, 0.7)',      // Bright Blue
    'rgba(255, 255, 0, 0.7)',    // Bright Yellow
    'rgba(255, 0, 255, 0.7)',    // Magenta
    'rgba(0, 255, 255, 0.7)',    // Cyan
    'rgba(128, 128, 128, 0.7)',  // Gray
    'rgba(128, 0, 0, 0.7)',      // Maroon
    'rgba(128, 128, 0, 0.7)',    // Olive
    'rgba(0, 128, 0, 0.7)',      // Green
    'rgba(128, 0, 128, 0.7)',    // Purple
    'rgba(0, 128, 128, 0.7)',    // Teal
    'rgba(0, 0, 128, 0.7)',      // Navy
    'rgba(255, 140, 0, 0.7)',    // Dark Orange
    'rgba(139, 0, 139, 0.7)',    // Dark Magenta
    'rgba(0, 100, 0, 0.7)',      // Dark Green
    'rgba(205, 133, 63, 0.7)',   // Peru
    'rgba(218, 165, 32, 0.7)'    // Goldenrod
    // Add more colors as needed
  ];

  const customHoverColors = [
    'rgba(255, 99, 132, 1)',   // Red
    'rgba(75, 192, 192, 1)',   // Green
    'rgba(255, 205, 86, 1)',   // Yellow
    'rgba(54, 162, 235, 1)',   // Blue
    'rgba(153, 102, 255, 1)',  // Purple
    'rgba(255, 159, 64, 1)',   // Orange
    'rgba(255, 0, 0, 1)',      // Bright Red
    'rgba(0, 255, 0, 1)',      // Bright Green
    'rgba(0, 0, 255, 1)',      // Bright Blue
    'rgba(255, 255, 0, 1)',    // Bright Yellow
    'rgba(255, 0, 255, 1)',    // Magenta
    'rgba(0, 255, 255, 1)',    // Cyan
    'rgba(128, 128, 128, 1)',  // Gray
    'rgba(128, 0, 0, 1)',      // Maroon
    'rgba(128, 128, 0, 1)',    // Olive
    'rgba(0, 128, 0, 1)',      // Green
    'rgba(128, 0, 128, 1)',    // Purple
    'rgba(0, 128, 128, 1)',    // Teal
    'rgba(0, 0, 128, 1)',      // Navy
    'rgba(255, 140, 0, 1)',    // Dark Orange
    'rgba(139, 0, 139, 1)',    // Dark Magenta
    'rgba(0, 100, 0, 1)',      // Dark Green
    'rgba(205, 133, 63, 1)',   // Peru
    'rgba(218, 165, 32, 1)'    // Goldenrod
  ];

  const labels = projects.map((project) => project.name)

  const durations = projects.map((project) => {
    const [hours, minutes] = project.duration.split(':');
    console.log('durations: ' + hours, '', minutes)
    return parseFloat(hours) + parseFloat(minutes) / 60;
  });
  
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Hours',
        backgroundColor: customColors,
        borderColor: customColors,
        borderWidth: 1,
        hoverBackgroundColor: customHoverColors,
        hoverBorderColor: customHoverColors,
        data: durations,
      },
    ],
  };



  const options = {
    plugins: {
      legend: {
        position: 'left', 
        responsive: true, 
        maintainAspectRatio: false,
      },
    },
  };

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();

  // Calculate the dates for the current week
  const dates = [];
  for (let i = 0; i < 6; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);
    dates.push(date.toDateString());
  }

  function calculateTotalDuration(projects) {
    let totalMinutes = 0;

    for (const project of projects) {
      const [hours, minutes] = project.duration.split(":");
      totalMinutes += parseInt(hours) * 60 + parseInt(minutes);
    }

  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;

  return `${totalHours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')}`;
  }

  const totalDuration = calculateTotalDuration(projects);
  console.log("Total Duration for All Projects:", totalDuration);

  // Add here weekly duraiton per day 
  const weeklyDuration = ['08:01', ''] 



  return (
    <div className='font-inter'>
      {/* TILES */}
      <div className='grid  md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5'>
        <div className=' border border-tertiary-a rounded-2xl flex justify-between p-5'>
          <div>
            <p className='font-bold text-accent text-[24px]'>{currentSession}</p>
            <p className='text-tertiary-a text-[12px]'>Current Session</p>
          </div>
          <div className='flex items-center'>
            <FaRegClock className='fa-2xl text-tertiary-a'/>
          </div>
        </div>
        <div className=' border border-tertiary-a rounded-2xl flex justify-between p-5'>
          <div>
            <p className='font-bold text-accent text-[24px]'>{timeIn}</p>
            <p className='text-tertiary-a text-[12px]'>Time-In</p>
          </div>
            <div className='flex items-center'>
             <FaRegHourglass className='fa-2xl text-tertiary-a'/>
            </div>
        </div>
        <div className=' border border-tertiary-a rounded-2xl flex justify-between p-5'>
            <div>
              <p className='font-bold text-accent text-[24px]'>{overtimes}/4</p>
              <p className='text-tertiary-a text-[12px]'>Overtime</p>
            </div>
            <div className='flex items-center'>
              <FaRegMoon className='fa-2xl text-tertiary-a'/>
            </div>
        </div>
        <div className='border border-tertiary-a rounded-2xl flex justify-between p-5'>
            <div>
              <p className='font-bold text-accent text-[24px]'>{leaves}/15</p>
              <p className='text-tertiary-a text-[12px]'>Leave</p>
            </div>
            <div className='flex items-center'>
              <FaRegCalendarTimes className='fa-2xl text-tertiary-a'/>
            </div>
        </div>
      </div>

      <div className='lg:flex   justify-between mb-2'>
        {/* WEEKLY REPORT  */}
        <div className='lg:w-[40%] mb-3 border border-tertiary-a rounded-2xl'>
          <div className='flex justify-between rounded-tl-2xl rounded-tr-2xl p-5 py-4 bg-accent-a'>
            <p className='font-bold text-teriary text-[16px]'>Weekly Report</p>
            <div className='flex items-center'>
              <div className='flex justify-center items-center w-[30px] h-[30px] border-teriary border-t border-l border-b rounded-tl-lg rounded-bl-lg'>
                 {/* CLICKABLE, MOVES PER WEEK */}
                <FaChevronLeft className='text-primary  fa-sm'/>
              </div>
              <div className='flex justify-center items-center w-[30px] h-[30px] border border-teriary'>
                 {/* CLICKABLE, SHOWS THE WEEK, THE GIVEN DAY IS INCLUDED */}
                <FaRegWindowMaximize className='text-primary fa-sm'/> 
              </div>
              <div className='flex justify-center items-center w-[30px] h-[30px] border-teriary border-t border-r border-b rounded-tr-lg rounded-br-lg'>
                 {/* CLICKABLE, MOVES PER WEEK */}
                <FaChevronRight className='text-primary fa-sm'/>
              </div>  
            </div>
          </div>
          <div className='px-5 py-2'>
          <table className='w-full'>
          <thead>
            <tr className='font-bold text-left'>
              <th className=''>Date</th>
              <th className=''>Duration</th>
            </tr>
          </thead>
          <tbody>
            {daysOfWeek.map((day, index) => (
              <tr key={day} className={`${index !== dates.length - 1 ? 'border-b' :''}`}>
                <td className='py-2 px-1'>{dates[index]}</td>
                <td>{weeklyDuration[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
          
        
        </div>
        {/* OVERVIEW */}
        <div className='lg:w-[58%] mb-3 border border-teriary rounded-2xl'>
          <div className='rounded-tl-2xl rounded-tr-2xl p-5 py-4 bg-accent-a'>
            <div  className='font-bold text-teriary text-[16px]'>Employment Overview</div>
          </div>
          <div className='lg:flex'>
            <div className='flex-grow px-5 flex lg:flex-col justify-between'>
              <div className='pt-[8%] lg:pb-[8%] px-[2%] lg:px-[7%] lg:border-b'>
                <p className='text-[14px] text-teriary'>Current Project</p>
                <p className='font-bold text-accent text-[20px] lg:ml-3 '>{projects[0].name}</p>
              </div>
          
              <div className='pt-[8%] lg:pb-[8%] px-[2%]  lg:px-[7%] lg:border-b'>
                <p className='text-[14px] text-teriary'>Clocked Hours</p>
                <p className='font-bold text-accent text-[24px] lg:ml-3  '>{totalDuration}</p>
              </div>
              
              <div className='pt-[8%] lg:pb-[8%] px-[2%]  lg:px-[7%]  '>
                <p className='text-[14px] text-teriary'>Project Participated</p>
                <p className='font-bold text-accent text-[24px] lg:ml-3 '>{totalProjects}</p>
              </div>
            </div>
            <div className='lg:w-[55%] flex justify-center items-center'>
              <div className='h-[100%] '>
                <Doughnut
                data= {data}
                options= {options}
                
                className=''/>
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
                  <th>Name</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody className=''>
                {projects.map((project, index) => (
                  <tr key={project.id} className={` ${index !== projects.length - 1 ? 'border-b' :''}`}  >
                    <td className = 'py-2 px-1'>{project.name}</td>
                    <td className = 'py-2 px-1'>{project.start}</td>
                    <td className = 'py-2 px-1'>{project.end}</td>
                    <td className = 'py-2 px-1'>{project.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
        </div>
      </div>
        
    </div>
  )
}

export default Dashboard