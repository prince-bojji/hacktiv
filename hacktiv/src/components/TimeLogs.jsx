import React, { useState } from 'react';

function TimeLogs() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date();
    const workDays = [
        {
            day: 'September 11, 2023',
            previous_time_in: '8:02',
            previous_time_out: '17:00',
            work_hours: '08:58'
        },
        {
            day: 'September 12, 2023',
            previous_time_in: '8:00',
            previous_time_out: '17:04',
            work_hours: '08:56'
        },
        {
            day: 'September 13, 2023',
            previous_time_in: '8:00',
            previous_time_out: '17:00',
            work_hours: '09:00'
        },
        {
            day: 'September 14, 2023',
            previous_time_in: '8:04',
            previous_time_out: '17:01',
            work_hours: '08:57'
        },
        {
            day: 'September 15, 2023',
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

    const [timerStart, setTimerStart] = useState(false);
    const [businessDays, setBusinessDays] = useState(workDays);

    // Add the functionality for the timer to start if timerStart is set to true
    // and to stop if timerStart is set to false
    // This task is meant for Cedrick 
    const onTimerStart = () => {
        setTimerStart(true);
    }

    const onTimerStop = () => {
        setTimerStart(false);
    }

    const onTimeIn = () => {
        const date = new Date();
        let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        let today = monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();

        setBusinessDays(businessDays.map(day => {
            if (day.day === today && day.previous_time_in.length === 1) {
                return {
                    ...day,
                    previous_time_in: date.getHours() + ':' + minutes
                };
            } else {
                return day;
            }
        }))
    }

    const onTimeOut = () => {
        const date = new Date();
        let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        let today = monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();

        setBusinessDays(businessDays.map(day => {
            if (day.day === today && day.previous_time_out.length === 1) {
                return {
                    ...day,
                    previous_time_out: date.getHours() + ':' + minutes
                };
            } else {
                return day;
            }
        }))
    }

    return (
        <div>
            <p className="pl-2 text-xl font-bold float-right mt-0.5">00:00</p>
            <div className="flex relative items-center float-right mb-5">
                {!timerStart ? (
                    <>
                        <i className="fa-solid fa-stopwatch absolute ml-3"></i>
                        <button onClick={() => {
                            onTimeIn(),
                                onTimerStart()
                        }} className="bg-accent-a font-semibold h-8 px-2 pr-3 pl-8 text-lg border border-secondary-a">
                            START</button>
                    </>
                ) : (
                    <>
                        <i className="fa-solid fa-stopwatch absolute ml-3"></i>
                        <button onClick={() => {
                            onTimeOut(),
                                onTimerStop()
                        }} className="bg-accent-a font-semibold h-8 px-2 pr-3 pl-8 text-lg border border-secondary-a">
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

                        {businessDays.map((workDay, index) =>
                            <>
                                <div className='flex py-2 justify-between items-center min-[320px]:text-sm sm:text-lg' key={index}>
                                    <p className='w-[25%] pl-5'>{workDay.day}</p>
                                    <p className='w-[25%] pl-[50px]'>{workDay.previous_time_in}</p>
                                    <p className='w-[25%] min-[320px]:pl-[35px] sm:pl-[50px]'>{workDay.previous_time_out}</p>
                                    <p className='w-[25%] min-[320px]:pl-[20px] sm:pl-[50px]'>{workDay.work_hours}</p>
                                </div>
                                {index < businessDays.length - 1 && <hr />}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeLogs;