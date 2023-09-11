import React from 'react'
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
  return (
    <div className='font-inter'>
      {/* TILES */}
      <div className='flex justify-between mb-5 '>
        <div className='w-[20%] border border-tertiary-a rounded-2xl flex justify-between p-5'>
          <div>
            <p className='font-bold text-accent text-[24px]'>4:53</p>
            <p className='text-tertiary-a text-[12px]'>Current Session</p>
          </div>
          <div className='flex items-center'>
            <FaRegClock className='fa-2xl text-tertiary-a'/>
          </div>
        </div>
        <div className='w-[20%] border border-tertiary-a rounded-2xl flex justify-between p-5'>
          <div>
            <p className='font-bold text-accent text-[24px]'>8:01</p>
            <p className='text-tertiary-a text-[12px]'>Time-In</p>
          </div>
            <div className='flex items-center'>
             <FaRegHourglass className='fa-2xl text-tertiary-a'/>
            </div>
        </div>
        <div className='w-[20%] border border-tertiary-a rounded-2xl flex justify-between p-5'>
            <div>
              <p className='font-bold text-accent text-[24px]'>1/4</p>
              <p className='text-tertiary-a text-[12px]'>Overtime</p>
            </div>
            <div className='flex items-center'>
              <FaRegMoon className='fa-2xl text-tertiary-a'/>
            </div>
        </div>
        <div className='w-[20%] border border-tertiary-a rounded-2xl flex justify-between p-5'>
            <div>
              <p className='font-bold text-accent text-[24px]'>0/15</p>
              <p className='text-tertiary-a text-[12px]'>Leave</p>
            </div>
            <div className='flex items-center'>
              <FaRegCalendarTimes className='fa-2xl text-tertiary-a'/>
            </div>
        </div>
      </div>

      <div className='flex justify-between mb-5'>
        {/* WEEKLY REPORT  */}
        <div className='w-[40%] border border-tertiary-a rounded-2xl mr-5'>
          <div className='flex justify-between rounded-tl-2xl rounded-tr-2xl p-5 py-4 bg-accent-a'>
            <p className='font-bold text-teriary text-[20px]'>Weekly Report</p>
            <div className='flex items-center'>
              <div className='flex justify-center items-center w-[30px] h-[30px] border-teriary border-t border-l border-b rounded-tl-lg rounded-bl-lg'>
                <FaChevronLeft className='text-primary  fa-sm'/>
              </div>
              <div className='flex justify-center items-center w-[30px] h-[30px] border border-teriary'>
                <FaRegWindowMaximize className='text-primary fa-sm'/>
              </div>
              <div className='flex justify-center items-center w-[30px] h-[30px] border-teriary border-t border-r border-b rounded-tr-lg rounded-br-lg'>
                <FaChevronRight className='text-primary fa-sm'/>
              </div>  
            </div>
          </div>
          <div className='flex p-2 px-5 font-bold'>
            <p className='w-[75%]'> Date</p>
            <p className=''>Duration</p>
          </div>
                    <div className='flex p-2 px-5'>
                      <p className='w-[75%]'>Wednesday, December 30</p>
                      <p>8:03</p>
                    </div>
                    <hr/>
                    <div className='flex p-2 px-5'>
                      <p className='w-[75%]'>Wednesday, December 30</p>
                      <p>8:03</p>
                    </div>
                    <hr/>
                    <div className='flex p-2 px-5'>
                      <p className='w-[75%]'>Wednesday, December 30</p>
                      <p>8:03</p>
                    </div>
                    <hr/>
                    <div className='flex p-2 px-5'>
                      <p className='w-[75%]'>Wednesday, December 30</p>
                      <p>8:03</p>
                    </div>
                    <hr/>
                    <div className='flex p-2 px-5'>
                      <p className='w-[75%]'>Wednesday, December 30</p>
                      <p>8:03</p>
                    </div>
                    <hr/>
                    <div className='flex p-2 px-5 mb-1'>
                      <p className='w-[75%]'>Wednesday, December 30</p>
                      <p>8:03</p>
                    </div>
        </div>
        {/* OVERVIEW */}
        <div className='flex-grow border border-teriary rounded-2xl'>
          <div className='rounded-tl-2xl rounded-tr-2xl p-5 py-4 bg-accent-a'>
            <div  className='font-bold text-teriary text-[20px]'>Employment Overview</div>
          </div>
          <div className='flex'>
            <div className='w-[40%] px-2 flex flex-col justify-between'>
              <div className='px-5 py-4 pt-6'>
                <p className='text-[14px] text-teriary'>Current Project</p>
                <p className='font-bold text-accent text-[20px] ml-3  '>Time-in/Time-out</p>
              </div>
              <hr/>
              <div className='px-5 py-4 '>
                <p className='text-[14px] text-teriary'>Clocked Hours</p>
                <p className='font-bold text-accent text-[24px] ml-3  '>82:32</p>
              </div>
              <hr/>
              <div className='px-5 py-4'>
                <p className='text-[14px] text-teriary'>Project Participated</p>
                <p className='font-bold text-accent text-[24px] ml-3  '>12</p>
              </div>
            </div>
            <div className='bg-teriary w-full'>
              Graph
            </div>
          </div>
          
        </div>
      </div>

      {/* PROJECTS */}
      <div>
      <div className='w-full border border-tertiary-a rounded-2xl'>
          <div className='flex justify-between rounded-tl-2xl rounded-tr-2xl p-5 py-4 bg-accent-a'>
            <p className='text-[20px] font-bold text-teriary'>Projects</p>
          </div>
          <div className='flex p-2 px-5 font-bold'>
            <p className='w-[35%]'> Name</p>
            <p className='w-[25%]'>Start</p>
            <p className='w-[25%]'>End</p>
            <p className=''>Duration</p>
          </div>
                    <div className='flex p-2 px-5'>
                      <p className='w-[35%]'>Time-in/Time-out</p>
                      <p className='w-[25%]'>August 29, 2023</p>
                      <p className='w-[25%]'>-</p>
                      <p>8:03</p>
                    </div>
                    <hr/>
                    <div className='flex p-2 px-5'>
                      <p className='w-[35%]'>El-Paraiso Website</p>
                      <p className='w-[25%]'>August 09, 2023</p>
                      <p className='w-[25%]'>August 27, 2023</p>
                      <p>32:42</p>
                    </div>
                    <hr/>
                    <div className='flex p-2 px-5'>
                      <p className='w-[35%]'>SHOT POS Terminal</p>
                      <p className='w-[25%]'>July 23, 2023</p>
                      <p className='w-[25%]'>August 07, 2023</p>
                      <p>25:37</p>
                    </div>
                    <hr/>
                    <div className='flex p-2 px-5'>
                      <p className='w-[35%]'>Crochet Corner Blogsite</p>
                      <p className='w-[25%]'>June 30, 2023</p>
                      <p className='w-[25%]'>July 20, 2023</p>
                      <p>44:51</p>
                    </div>      
                    
        </div>
      </div>
        
    </div>
  )
}

export default Dashboard