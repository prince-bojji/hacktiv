import React, { useState } from 'react';
import ProjectTracker from './ProjectTracker';
import AttendanceRecord from './AttendanceRecord';

function TimeLogs() {
    const [projectTracker, setProjectTracker] = useState(false);
    const [attendanceRecord, setAttendanceRecord] = useState(false);

    const onProjectTracker = () => {
        setProjectTracker(true);
    }

    const onAttendanceRecord = () => {
        setAttendanceRecord(true);
    }

    return (
        <div>
            {!projectTracker && !attendanceRecord ? (
                <>
                    <div>
                        <button
                            className="bg-accent py-2 rounded text-secondary-a min-[320px]:px-1 sm:px-7 lg:text-lg xl:font-normal mb-4 float-right mr-5"
                            onClick={onAttendanceRecord}>Attendance
                        </button>
                        <button
                            className="bg-accent py-2 rounded text-secondary-a min-[320px]:px-1 sm:px-7 lg:text-lg xl:font-normal mb-4 float-right mr-5"
                            onClick={onProjectTracker}>Project Tracker
                        </button>
                        <p className="text-lg font-bold">Time Records</p>
                        <div className="w-full">

                            <div className="mt-2 text-xl font-bold border border-secondary-a rounded-t p-4 flex bg-accent-a w-full h-[65px] items-center">
                                This Week
                            </div>

                            <div className={"bg-primary dark:bg-gray-800 border rounded-b p-1 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] h-max shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
                                <div className='flex font-bold justify-between items-center'>
                                    <p className="pl-5">Date</p>
                                    <button
                                        className="bg-accent border border-secondary-a py-2 rounded text-secondary-a mt-2 mb-2 min-[320px]:ml-[45px] min-[320px]:p-1 min-[320px]:text-xs sm:text-lg sm:px-5 sm:ml-[70px] md:ml-[87px] lg:ml-[97px] xl:ml-[120px]"
                                    >Time in
                                    </button>
                                    <button
                                        className="bg-accent border border-secondary-a py-2 rounded text-secondary-a mt-2 mb-2 min-[320px]:p-1 min-[320px]:mr-2 min-[320px]:text-xs sm:px-7 sm:text-lg sm:mr-[30px] lg:mr-[63px] xl:mr-[140px]"
                                    >Time out
                                    </button>
                                </div>

                                {/* The past seven business days should appear here */}
                                <div className='flex p-2 px-5 min-[320px]:gap-5 sm:gap-0'>
                                    <p className='w-[45%]'>September 02, 2023</p>
                                    <p className='w-[40%]'>8:00</p>
                                    <p>15:00</p>
                                </div>
                                <hr />
                                <div className='flex p-2 px-5 min-[320px]:gap-5 sm:gap-0'>
                                    <p className='w-[45%]'>September 04, 2023</p>
                                    <p className='w-[40%]'>-</p>
                                    <p>-</p>
                                </div>
                                <hr />
                                <div className='flex p-2 px-5 min-[320px]:gap-5 sm:gap-0'>
                                    <p className='w-[45%]'>September 05, 2023</p>
                                    <p className='w-[40%]'>08:20</p>
                                    <p>15:48</p>
                                </div>
                                <hr />
                                <div className='flex p-2 px-5 min-[320px]:gap-5 sm:gap-0'>
                                    <p className='w-[45%]'>September 07, 2023</p>
                                    <p className='w-[40%]'>07:30</p>
                                    <p>15:02</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* The past thirty business days should appear here*/}
                    {/* <p> tags are used for Time in and Time out here*/}
                    <div>
                        <div className="w-full">
                            <div className="mt-[50px] text-xl font-bold border-secondary-a rounded-t p-4 border border-solid border-b-tertiary-a flex bg-accent-a justify-between w-full h-[65px] items-center">
                                Past Month
                            </div>
                            <div className={"bg-primary dark:bg-gray-800 border rounded-b p-1 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] h-max shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
                                <div className='flex p-2 px-5 min-[320px]:gap-5 sm:gap-0'>
                                    <p className='w-[45%]'>Date</p>
                                    <p className='w-[40%]'>Time in</p>
                                    <p>Time out</p>
                                </div>
                                <div className='flex p-2 px-5 min-[320px]:gap-5 sm:gap-0'>
                                    <p className='w-[45%]'>August 09, 2023</p>
                                    <p className='w-[40%]'>8:05</p>
                                    <p>15:00</p>
                                </div>
                                <hr />
                                <div className='flex p-2 px-5 min-[320px]:gap-5 sm:gap-0'>
                                    <p className='w-[45%]'>August 23, 2023</p>
                                    <p className='w-[40%]'>07:40</p>
                                    <p>16:05</p>
                                </div>
                                <hr />
                                <div className='flex p-2 px-5 min-[320px]:gap-5 sm:gap-0'>
                                    <p className='w-[45%]'>August 25, 2023</p>
                                    <p className='w-[40%]'>-</p>
                                    <p>-</p>
                                </div>
                                <hr />
                                <div className='flex p-2 px-5 min-[320px]:gap-5 sm:gap-0'>
                                    <p className='w-[45%]'>August 29, 2023</p>
                                    <p className='w-[40%]'>08:45</p>
                                    <p>16:53</p>
                                </div>
                                <hr />
                                <div className='flex p-2 px-5 min-[320px]:gap-5 sm:gap-0'>
                                    <p className='w-[45%]'>August 29, 2023</p>
                                    <p className='w-[40%]'>08:45</p>
                                    <p>16:53</p>
                                </div>
                                <hr />
                                <div className='flex p-2 px-5 min-[320px]:gap-5 sm:gap-0'>
                                    <p className='w-[45%]'>August 29, 2023</p>
                                    <p className='w-[40%]'>08:45</p>
                                    <p>16:53</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            ) : projectTracker ? (<ProjectTracker />) : attendanceRecord ? (<AttendanceRecord />) : <></>}
        </div>
    )
}

export default TimeLogs;