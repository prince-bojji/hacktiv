import React, { useState } from 'react';
import ProjectTracker from './ProjectTracker';

function TimeLogs() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date();
    const workDays = [
        {
            day: 'September 6, 2023',
            previous_time_in: '8:02',
            previous_time_out: '17:00'
        },
        {
            day: 'September 7, 2023',
            previous_time_in: '8:00',
            previous_time_out: '17:04'
        },
        {
            day: 'September 8, 2023',
            previous_time_in: '8:00',
            previous_time_out: '17:00'
        },
        {
            day: 'September 11, 2023',
            previous_time_in: '8:04',
            previous_time_out: '17:01'
        },
        {
            day: 'September 12, 2023',
            previous_time_in: '8:01',
            previous_time_out: '17:00'
        },
        {
            day: monthNames[date.getMonth()] + ' ' + date.getDate()+ ', ' + date.getFullYear(),
            previous_time_in: '-',
            previous_time_out: '-'
        },
    ];

    const [projectTracker, setProjectTracker] = useState(false);
    const [timeIn, setTimeIn] = useState('-');
    const [timedIn, setTimedIn] = useState(false);
    const [timeOut, setTimeOut] = useState('-');
    const [timedOut, setTimedOut] = useState(false);

    const onProjectTracker = () => {
        setProjectTracker(true);
    }

    let minutes = (date.getMinutes()<10?'0':'') + date.getMinutes()

    const onTimeIn = () => {
        setTimeIn(date.getHours() + ":" + minutes);       
        setTimedIn(true);
    }

    const onTimeOut = () => {
        setTimeOut(date.getHours() + ":" + minutes);
        setTimedOut(true);
    }

    return (
        <div>
            {!projectTracker ? (
                <>
                    <div>
                        <button
                            className="bg-accent py-2 rounded text-secondary-a min-[320px]:px-1 sm:px-7 lg:text-lg xl:font-normal mb-4 float-right mr-5"
                        >Attendance
                        </button>
                        <button
                            className="bg-accent py-2 rounded text-secondary-a min-[320px]:px-1 sm:px-7 lg:text-lg xl:font-normal mb-4 float-right mr-5"
                            onClick={onProjectTracker}>Project Tracker
                        </button>
                        <div className="w-full">
                            <div className="mt-2 text-xl font-bold border border-secondary-a rounded-t p-4 flex bg-accent-a w-full h-[65px] items-center">
                                Time Records
                            </div>
                            <div className={"bg-primary dark:bg-gray-800 border rounded-b p-1 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] h-max shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
                                <div className='flex font-bold justify-between items-center'>
                                    <p className="pl-5">Date</p>
                                    <button
                                        className="bg-accent border border-secondary-a py-2 rounded text-secondary-a mt-2 mb-2 min-[320px]:ml-[45px] min-[320px]:p-1 min-[320px]:text-xs sm:text-lg sm:px-5 sm:ml-[70px] md:ml-[87px] lg:ml-[97px] xl:ml-[120px]"
                                        onClick={onTimeIn} disabled={timedIn}
                                    >Time in
                                    </button>
                                    <button
                                        className="bg-accent border border-secondary-a py-2 rounded text-secondary-a mt-2 mb-2 min-[320px]:p-1 min-[320px]:mr-2 min-[320px]:text-xs sm:px-7 sm:text-lg sm:mr-[30px] lg:mr-[63px] xl:mr-[140px]"
                                        onClick={onTimeOut} disabled={timedOut}
                                    >Time out
                                    </button>
                                </div>

                                {workDays.map((workDay, index) =>
                                    <>
                                        <div className='flex p-2 px-5 min-[320px]:gap-5 sm:gap-0' key={index}>
                                            <p className='w-[45%]'>{workDay.day}</p>
                                            {workDay.previous_time_in !== '-' ? (
                                                <p className='w-[40%] '>{workDay.previous_time_in}</p>
                                            ) : <p className='w-[40%] '>{timeIn}</p>}
                                            {workDay.previous_time_out !== '-' ? (
                                                <p>{workDay.previous_time_out}</p>
                                            ) : <p>{timeOut}</p>}
                                        </div>
                                        {index < workDays.length - 1 && <hr />}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            ) : <ProjectTracker />}
        </div>
    )
}

export default TimeLogs;