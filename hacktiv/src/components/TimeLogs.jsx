import React, { useState } from 'react';
import ProjectTracker from './ProjectTracker';

function TimeLogs() {
    const [projectTracker, setProjectTracker] = useState(false);


    const onProjectTracker = () => {
        setProjectTracker(true);
    }

    return (        
        <div className="font-inter">
            {!projectTracker ? (
                <>
                    {/* The past seven business days should appear here */}
                    <div>
                        <button
                            className="bg-accent px-7 py-2 rounded p-5 text-secondary-a [320px]:text-md lg:text-lg xl:font-normal mb-4 float-right mr-5"
                        >Attendance
                        </button>
                        <button
                            className="bg-accent px-7 py-2 rounded p-5 text-secondary-a [320px]:text-md lg:text-lg xl:font-normal mb-4 float-right mr-5"
                            onClick={onProjectTracker}>Project Tracker
                        </button>
                        <p className="text-lg font-bold ">Time Records</p>
                        <div className="w-full">
                            <div className="mt-2 text-xl font-bold border-secondary-a rounded-t p-4 border border-solid border-b-tertiary-a flex bg-accent-a justify-between w-full h-[65px] items-center">
                                This Week
                            </div>
                            <div className={"bbg-primary dark:bg-gray-800 border rounded-b p-1 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] h-max shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
                                <div className='flex p-2 px-5 font-bold'>
                                    <p className='w-[45%]'>Date</p>
                                    <p className='w-[40%]'>Time in</p>
                                    <p>Time out</p>
                                </div>
                                <div className='flex p-2 px-5'>
                                    <p className='w-[45%]'>September 02, 2023</p>
                                    <p className='w-[40%]'>8:00</p>
                                    <p>15:00</p>
                                </div>
                                <hr />
                                <div className='flex p-2 px-5'>
                                    <p className='w-[45%]'>September 04, 2023</p>
                                    <p className='w-[40%]'>-</p>
                                    <p>-</p>
                                </div>
                                <hr />
                                <div className='flex p-2 px-5'>
                                    <p className='w-[45%]'>September 05, 2023</p>
                                    <p className='w-[40%]'>08:20</p>
                                    <p>15:48</p>
                                </div>
                                <hr />
                                <div className='flex p-2 px-5'>
                                    <p className='w-[45%]'>September 07, 2023</p>
                                    <p className='w-[40%]'>07:30</p>
                                    <p>15:02</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* The past thirty business days should appear here */}
                    <div>
                        <div className="w-full">
                            <div className="mt-[50px] text-xl font-bold border-secondary-a rounded-t p-4 border border-solid border-b-tertiary-a flex bg-accent-a justify-between w-full h-[65px] items-center">
                                Past Month
                            </div>
                            <div className={"bg-primary dark:bg-gray-800 border rounded-b p-1 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] h-max shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
                                <div className='flex p-2 px-5 font-bold'>
                                    <p className='w-[45%]'>Date</p>
                                    <p className='w-[40%]'>Time in</p>
                                    <p>Time out</p>
                                </div>
                                <div className='flex p-2 px-5'>
                                    <p className='w-[45%]'>August 09, 2023</p>
                                    <p className='w-[40%]'>8:05</p>
                                    <p>15:00</p>
                                </div>
                                <hr />
                                <div className='flex p-2 px-5'>
                                    <p className='w-[45%]'>August 23, 2023</p>
                                    <p className='w-[40%]'>07:40</p>
                                    <p>16:05</p>
                                </div>
                                <hr />
                                <div className='flex p-2 px-5'>
                                    <p className='w-[45%]'>August 25, 2023</p>
                                    <p className='w-[40%]'>-</p>
                                    <p>-</p>
                                </div>
                                <hr />
                                <div className='flex p-2 px-5'>
                                    <p className='w-[45%]'>August 29, 2023</p>
                                    <p className='w-[40%]'>08:45</p>
                                    <p>16:53</p>
                                </div>
                                <hr />
                                <div className='flex p-2 px-5'>
                                    <p className='w-[45%]'>August 29, 2023</p>
                                    <p className='w-[40%]'>08:45</p>
                                    <p>16:53</p>
                                </div>
                                <hr />
                                <div className='flex p-2 px-5'>
                                    <p className='w-[45%]'>August 29, 2023</p>
                                    <p className='w-[40%]'>08:45</p>
                                    <p>16:53</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : <ProjectTracker />}
        </div>
    )
}

export default TimeLogs;