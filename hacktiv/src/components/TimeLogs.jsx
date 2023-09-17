import React, { useState, useEffect } from 'react';
import jsonData from '../data/db.json'; // Assuming db.json is in the correct directory
import { useUserContext } from '../components/UserContext';

function TimeLogs() {
  const { user } = useUserContext();
  const targetEmail = user.email;

  const [userWorkDays, setUserWorkDays] = useState([]);

  useEffect(() => {
    const targetUser = jsonData.users.find((user) => user.email === targetEmail);
    if (targetUser) {
      setUserWorkDays(targetUser.time_entries);
    }
  }, [targetEmail]);

  return (
    <div>
      <div>
        <div className='w-full'>
          <div className='mx-auto justify-center mt-10 text-xl font-bold border border-secondary-a rounded-t p-4 flex bg-accent-a xl:w-[80%]  h-[65px] items-center'>
            Time Records
          </div>
          <div className='mx-auto justify-center bg-primary dark:bg-gray-800 border rounded-b p-1 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[80%] h-max shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100'>
            <div className='flex font-bold justify-between items-center min-[320px]:text-sm sm:text-lg'>
              <p className='w-[20%] pl-5'>Date</p>
              <p className='w-[20%] pl-[50px] '>Time in</p>
              <p className='w-[20%] min-[320px]:pl-[35px] sm:pl-[50px]'>Time out</p>
              <p className='w-[20%] min-[320px]:pl-[20px] sm:pl-[50px]'>Total Clock Hours</p>
            </div>
            {userWorkDays.map((workDay, index) => (
              <div
                className='flex py-2 justify-between items-center min-[320px]:text-sm sm:text-lg'
                key={index}
              >
                <p className='w-[20%] pl-5'>{workDay.date}</p>
                <p className='w-[20%] pl-[50px]'>{workDay.time_in}</p>
                <p className='w-[20%] min-[320px]:pl-[35px] sm:pl-[50px]'>{workDay.time_out}</p>
                <p className='w-[20%] min-[320px]:pl-[20px] sm:pl-[50px]'>{workDay.total_clock_hours}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeLogs;
