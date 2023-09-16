import React, { useState } from 'react';

function TimeLogs() {
  const date = new Date();
  const dateFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  const today = date.toLocaleDateString(undefined, dateFormatOptions);

  const workDays = [
    {
      day: '09/11/2023',
      previous_time_in: '8:02',
      previous_time_out: '17:00',
      work_hours: '08:58',
    },
    {
      day: '09/12/2023',
      previous_time_in: '8:00',
      previous_time_out: '17:04',
      work_hours: '08:56',
    },
    {
      day: '09/13/2023',
      previous_time_in: '8:00',
      previous_time_out: '17:00',
      work_hours: '09:00',
    },
    {
      day: '09/14/2023',
      previous_time_in: '8:04',
      previous_time_out: '17:01',
      work_hours: '08:57',
    }, //,
    // {
    //     day: today,
    //     previous_time_in: '-',
    //     previous_time_out: '-',
    //     work_hours: '-'
    // },
  ];

  const [businessDays] = useState(workDays);

  return (
    <div>
      <div>
        <div className='w-full'>
          <div className='mt-10 text-xl font-bold border border-secondary-a rounded-t p-4 flex bg-accent-a w-full h-[65px] items-center'>
            Time Records
          </div>
          <div
            className={
              'bg-primary dark:bg-gray-800 border rounded-b p-1 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] h-max shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100'
            }>
            <div className='flex font-bold justify-between items-center min-[320px]:text-sm sm:text-lg'>
              <p className='w-[20%] pl-5'>Date</p>
              <p className='w-[20%] pl-[50px] '>Time in</p>
              <p className='w-[20%] min-[320px]:pl-[35px] sm:pl-[50px]'>
                Time out
              </p>
              <p className='w-[20%] min-[320px]:pl-[20px] sm:pl-[50px]'>
                Work hours
              </p>
            </div>
            {businessDays.map((workDay, index) => (
              <div
                className='flex py-2 justify-between items-center min-[320px]:text-sm sm:text-lg'
                key={index}>
                <p className='w-[20%] pl-5'>{workDay.day}</p>
                <p className='w-[20%] pl-[50px]'>{workDay.previous_time_in}</p>
                <p className='w-[20%] min-[320px]:pl-[35px] sm:pl-[50px]'>
                  {workDay.previous_time_out}
                </p>
                <p className='w-[20%] min-[320px]:pl-[20px] sm:pl-[50px]'>
                  {workDay.work_hours}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeLogs;
