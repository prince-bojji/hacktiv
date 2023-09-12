import React, { useState } from 'react'
import TimeLogs from './TimeLogs';

function ProjectTracker() {
    const [timerStart, setTimerStart] = useState(false);
    const [timeLogs, setTimeLogs] = useState(false);

    const onTimeLogs = () => {
        setTimeLogs(true);
    }

    // Add the functionality for the timer to start if timerStart is set to true
    // and to stop if timerStart is set to false
    // This task is meant for Cedrick 
    const onTimerStart = () => {
        setTimerStart(!timerStart);
    }

    return (
        <>
            {!timeLogs ? (
                <div>
                    <button
                        className="bg-accent px-7 py-2 rounded p-5 text-secondary-a [320px]:text-md lg:text-lg xl:font-normal mb-4 float-right mr-5"
                    >Attendance
                    </button>
                    <button
                        className="bg-accent px-7 py-2 rounded p-5 text-secondary-a [320px]:text-md lg:text-lg xl:font-normal mb-4 float-right mr-5"
                        onClick={onTimeLogs}>Time Logs
                    </button>
                    <p className="text-lg font-bold">Project Tracker</p>
                    <div className="w-full">
                        <div className="mt-5 text-xl flex justify-between w-[20%] h-[40px]">
                            <div className="flex items-center relative">
                                <i className="fa-solid fa-magnifying-glass absolute ml-3 fa-sm"></i>
                                <input type="search" name="search" className="pl-8 bg-accent-a rounded-lg placeholder-secondary border-tertiary-b border border-solid shadow-inner text-sm h-full w-[68%] md:w-[80%] xl:w-[90%] pr-10"
                                    placeholder="Search for projects"
                                >
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="mt-[30px] text-xl font-bold border-secondary-a rounded-t p-4 border border-solid border-b-tertiary-a flex bg-accent-a justify-between w-full h-[65px] items-center min-[320px]:text-md lg:text-md">
                            Available Projects
                        </div>
                        <div className="bg-primary dark:bg-gray-800 border rounded-b p-1 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] h-max shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100">
                            <div className='flex p-2 px-5 font-bold min-[320px]:gap-3 sm:gap-[40px] md:gap-[50px] lg:gap-[70px] xl:gap-[100px] 2xl:gap-[0]'>
                                <p className='w-[45%]'>Project Name</p>
                                <p className='min-[320px]:w-[40%]'>Status</p>
                                <p className=''>Total time rendered</p>
                            </div>

                            {/*Only ongoing projects should be displayed here. Use the database for projects in the ProjectEnlist component.*/}
                            {/*Filter the database so that you won't have to repeat the code for the condition for the timer buttons*/}
                            <div className='flex p-2 px-5 min-[320px]:text-sm items-center sm:text-lg'>
                                <p className='min-[320px]:w-[39%] xl:w-[43%]'>test</p>
                                <p className='min-[320px]:w-[40%] lg:ml-[27px]'>Ongoing</p>
                                {!timerStart ? (
                                    <button className="mr-2" onClick={onTimerStart} style={{ color: '#ffda55' }}>
                                        <i className="fa-solid fa-play fa-lg"></i>
                                    </button>
                                ) : (
                                    <button className="mr-2" onClick={onTimerStart} style={{ color: '#ffda55' }}>
                                        <i className="fa-solid fa-circle-pause fa-lg"></i>
                                    </button>
                                )}
                                {/*Replace p value with functioning timer*/}
                                {/*This task is meant for Cedrick*/}
                                <p>00:00:00</p>
                            </div>
                            <hr />

                            <div className='flex p-2 px-5 min-[320px]:text-sm items-center sm:text-lg'>
                                <p className='min-[320px]:w-[39%] xl:w-[43%]'>test1</p>
                                <p className='min-[320px]:w-[40%] lg:ml-[27px]'>Ongoing</p>
                                {!timerStart ? (
                                    <button className="mr-2" onClick={onTimerStart} style={{ color: '#ffda55' }}>
                                        <i className="fa-solid fa-play fa-lg"></i>
                                    </button>
                                ) : (
                                    <button className="mr-2" onClick={onTimerStart} style={{ color: '#ffda55' }}>
                                        <i className="fa-solid fa-circle-pause fa-lg"></i>
                                    </button>
                                )}
                                {/*Replace p value with functioning timer*/}
                                <p>00:00:00</p>
                            </div>
                            <hr />
                            <div className='flex p-2 px-5 min-[320px]:text-sm items-center sm:text-lg'>
                                <p className='min-[320px]:w-[39%] xl:w-[43%]'>test4</p>
                                <p className='min-[320px]:w-[40%] lg:ml-[27px]'>Ongoing</p>
                                {!timerStart ? (
                                    <button className="mr-2" onClick={onTimerStart} style={{ color: '#ffda55' }}>
                                        <i className="fa-solid fa-play fa-lg"></i>
                                    </button>
                                ) : (
                                    <button className="mr-2" onClick={onTimerStart} style={{ color: '#ffda55' }}>
                                        <i className="fa-solid fa-circle-pause fa-lg"></i>
                                    </button>
                                )}
                                {/*Replace p value with functioning timer*/}
                                <p>00:00:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <TimeLogs />}
        </>
    )
}

export default ProjectTracker;