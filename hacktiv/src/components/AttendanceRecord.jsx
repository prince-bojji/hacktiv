import React, { useState } from 'react';
import TimeLogs from './TimeLogs';
import ProjectTracker from './ProjectTracker';

function AttendanceRecord() {
    const [projectTracker, setProjectTracker] = useState(false);
    const [timeLogs, setTimeLogs] = useState(false);

    const onProjectTracker = () => {
        setProjectTracker(true);
    }

    const onTimeLogs = () => {
        setTimeLogs(true);
    }

    return (
        <div>
            {!timeLogs && !projectTracker ? (
                <>
                    <div>
                        <button
                            className="bg-accent py-2 rounded text-secondary-a min-[320px]:px-1 sm:px-7 lg:text-lg xl:font-normal mb-4 float-right mr-5"
                        onClick={onTimeLogs}>Time Logs
                        </button>
                        <button
                            className="bg-accent py-2 rounded text-secondary-a min-[320px]:px-1 sm:px-7 lg:text-lg xl:font-normal mb-4 float-right mr-5"
                            onClick={onProjectTracker}>Project Tracker
                        </button>
                        <p className="text-lg font-bold">Attendance Records</p>
                    </div>

                    <div>
                        <div className="w-full">
                            <div className="mt-[50px] text-xl font-bold border-secondary-a rounded-t p-4 border border-solid border-b-tertiary-a flex bg-accent-a justify-between w-full h-[65px] items-center">
                                <p className='w-[45%]'>User</p>
                                <p className='w-[45%]'>Date</p>
                                <p className='w-[45%]'>Start</p>
                                <p className='w-[45%]'>End</p>
                                <p className='w-[45%]'>Break</p>
                                <p className='w-[45%]'>Work</p>
                                <p className='w-[45%]'>Time off</p>
                            </div>

                            <div className={"bg-primary dark:bg-gray-800 border rounded-b p-1 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] h-max shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
                                <div className='flex p-2 px-5 min-[320px]:gap-5 sm:gap-0'>
                                    <p className='w-[50%]'>Vincent Fabron</p>
                                    <p className='w-[71%]'>September 02, 2023</p>
                                    <p className='w-[59%]'>8:00</p>
                                    <p className='w-[60%]'>17:00</p>
                                    <p className='w-[60%]'>12:00</p>
                                    <p className='w-[65%]'>13:00</p>
                                    <p className='w-[55%]'>17:00</p>
                                </div>
                            </div>

                            <div className={"bg-primary dark:bg-gray-800 border rounded-b p-1 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] h-max shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
                                <div className='flex p-2 px-5 min-[320px]:gap-5 sm:gap-0'>
                                    <p className='w-[50%]'>Tala Nicole Valdez</p>
                                    <p className='w-[71%]'>September 02, 2023</p>
                                    <p className='w-[59%]'>8:00</p>
                                    <p className='w-[60%]'>17:00</p>
                                    <p className='w-[60%]'>12:00</p>
                                    <p className='w-[65%]'>13:00</p>
                                    <p className='w-[55%]'>17:00</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </>
            ) : timeLogs ? (<TimeLogs />) : projectTracker ? (<ProjectTracker />) : <></>}
        </div>
    )
}

export default AttendanceRecord;