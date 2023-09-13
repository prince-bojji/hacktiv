import React, { useState } from 'react';

function TimeLogs() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date();
    const workDays = [
        {
            day: 'September 6, 2023',
            previous_time_in: '8:02',
            previous_time_out: '17:00',
            work_hours: '08:58'
        },
        {
            day: 'September 7, 2023',
            previous_time_in: '8:00',
            previous_time_out: '17:04',
            work_hours: '08:56'
        },
        {
            day: 'September 8, 2023',
            previous_time_in: '8:00',
            previous_time_out: '17:00',
            work_hours: '09:00'
        },
        {
            day: 'September 11, 2023',
            previous_time_in: '8:04',
            previous_time_out: '17:01',
            work_hours: '08:57'
        },
        {
            day: 'September 12, 2023',
            previous_time_in: '8:01',
            previous_time_out: '17:00',
            work_hours: '08:59'
        },
        {
            day: monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear(),
            previous_time_in: '-',
            previous_time_out: '-',
            work_hours: '-'
        },
    ];

    const [timeIn, setTimeIn] = useState('-');
    const [timeOut, setTimeOut] = useState('-');
    const [timerStart, setTimerStart] = useState(false);

    // Add the functionality for the timer to start if timerStart is set to true
    // and to stop if timerStart is set to false
    // This task is meant for Cedrick 
    const onTimerStart = () => {
        const date = new Date();
        let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

        { timeIn === '-' && setTimeIn(date.getHours() + ":" + minutes) }
        setTimerStart(true);
    }

    const onTimerStop = () => {
        const date = new Date();
        let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

        { timeOut === '-' && setTimeOut(date.getHours() + ":" + minutes) }
        setTimerStart(false);
    }

    return (
        <div>
            <p className="pl-2 text-xl font-bold float-right mt-0.5">00:00</p>
            <div className="flex relative items-center float-right mb-5">
                {!timerStart ? (
                    <>
                        <i className="fa-solid fa-stopwatch absolute ml-3"></i>
                        <button onClick={onTimerStart} className="bg-accent-a font-semibold h-8 px-2 pr-3 pl-8 text-lg border border-secondary-a">
                            START</button>
                    </>
                ) : (
                    <>
                        <i className="fa-solid fa-stopwatch absolute ml-3"></i>
                        <button onClick={onTimerStop} className="bg-accent-a font-semibold h-8 px-2 pr-3 pl-8 text-lg border border-secondary-a">
                            STOP</button>
                    </>
                )}
            </div>

            <div>
                <div className="w-full">
                    <div className="mt-2 text-xl font-bold border border-secondary-a rounded-t p-4 flex bg-accent-a w-full h-[65px] items-center">
                        Time Records
                    </div>
                    <div className={"bg-primary dark:bg-gray-800 border rounded-b p-1 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] h-max shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
                        <div className='flex font-bold justify-between items-center min-[320px]:text-sm sm:text-lg'>
                            <p className="w-[25%] pl-5">Date</p>
                            <p className="w-[25%] pl-[50px] ">Time in</p>
                            <p className="w-[25%] min-[320px]:pl-[35px] sm:pl-[50px]">Time out</p>
                            <p className="w-[25%] min-[320px]:pl-[20px] sm:pl-[50px]">Work hours</p>

                        </div>

                        {workDays.map((workDay, index) =>
                            <>
                                <div className='flex py-2 justify-between items-center min-[320px]:text-sm sm:text-lg' key={index}>
                                    <p className='w-[25%] pl-5'>{workDay.day}</p>
                                    {workDay.previous_time_in !== '-' ? (
                                        <p className='w-[25%] pl-[50px]'>{workDay.previous_time_in}</p>
                                    ) : <p className='w-[25%] pl-[50px]'>{timeIn}</p>}
                                    {workDay.previous_time_out !== '-' ? (
                                        <p className='w-[25%] min-[320px]:pl-[35px] sm:pl-[50px]'>{workDay.previous_time_out}</p>
                                    ) : <p className='w-[25%] min-[320px]:pl-[35px] sm:pl-[50px]'>{timeOut}</p>}
                                    <p className='w-[25%] min-[320px]:pl-[20px] sm:pl-[50px]'>{workDay.work_hours}</p>
                                </div>
                                {index < workDays.length - 1 && <hr />}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeLogs;