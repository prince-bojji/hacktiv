import React, { useState } from 'react';

function TimeTrackerPage() {
    const [timeLogs, setTimeLogs] = useState(false);
    const [projectButton, setProjectButton] = useState(false);

    const date = new Date()


    return (
        <div className="font-inter">
            {timeLogs ? (
                <>
                    {/* Projects worked on in the past seven days should appear here */}
                    <div>
                        <button
                            className="bg-accent px-7 py-2 rounded p-5 text-secondary-a [320px]:text-md lg:text-lg xl:font-normal mb-4 float-right mr-5"
                        >Attendance
                        </button>
                        <button
                            className="bg-accent px-7 py-2 rounded p-5 text-secondary-a [320px]:text-md lg:text-lg xl:font-normal mb-4 float-right mr-5"
                            onClick={() => setTimeLogs(!timeLogs)}>Go Back
                        </button>
                        <p className="text-lg font-bold">Time Records</p>
                        <div className="w-full">
                            <div className="mt-2 text-xl font-bold border-secondary-a rounded-t p-4 border border-solid border-b-tertiary-a flex bg-accent-a justify-between w-full h-[65px] items-center">
                                This Week
                            </div>
                            <div className={"bg-primary dark:bg-gray-800 border rounded-b p-1 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] h-max shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
                                <div className='flex p-2 px-5 font-bold'>
                                    <p className='w-[45%]'>Date</p>
                                    <p className='w-[40%]'>Log in</p>
                                    <p>Log out</p>
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
                    {/* Projects worked on in the past thirty days should appear here */}
                    <div>
                        <div className="w-full">
                            <div className="mt-[50px] text-xl font-bold border-secondary-a rounded-t p-4 border border-solid border-b-tertiary-a flex bg-accent-a justify-between w-full h-[65px] items-center">
                                Past Month
                            </div>
                            <div className={"bg-primary dark:bg-gray-800 border rounded-b p-1 xs:text-xs md:text-lg xl:text-lg min-[320px]:w-[100%] md:w-[100%] xl:w-[100%] h-max shadow-[0_0_2px_1px_rgba(0,0,0,0.25)] ease-in duration-100"}>
                                <div className='flex p-2 px-5 font-bold'>

                                    <p className='w-[45%]'>Date</p>
                                    <p className='w-[40%]'>Log in</p>
                                    <p className=''>Log out</p>
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
                            </div>
                        </div>
                    </div>
                </>
            )
                :
                (
                    <>
                        <div>
                            <button
                                className="bg-accent px-7 py-2 rounded p-5 text-secondary-a [320px]:text-md lg:text-lg xl:font-normal mb-4 float-right mr-5"
                            >Attendance
                            </button>

                            <button
                                className="bg-accent px-7 py-2 rounded p-5 text-secondary-a [320px]:text-md lg:text-lg xl:font-normal mb-4 float-right mr-5"
                                onClick={() => setTimeLogs(!timeLogs)}>Time Logs
                            </button>

                            {projectButton && <div className="relative">
                                <div className="absolute bottom-0 right-0">
                                    <div className="rounded-lg" style={{ width: 300, height: 200, backgroundColor: '#dfdfdf' }}>
                                        <div className="flex items-center relative pl-[27px] pt-3 outline-secondary">
                                            <i className="fa-solid fa-magnifying-glass absolute ml-3 fa-sm"></i>
                                            <input type="text" name="search" className="bg-accent-a rounded-lg h-7 text-sm  font-semibold placeholder-secondary pr-3 pl-8"
                                                placeholder="Search"
                                            >
                                            </input>
                                        </div>
                                        <div className="pl-[170px] pt-28">
                                            <button className="rounded-lg bg-accent-a font-bold px-3 text-sm h-8" onClick={() => { setProjectCreate(!projectCreate) }}>Create New</button>
                                        </div>
                                    </div>
                                </div>
                            </div>}

                            <div className="w-full">
                                <div className="mt-2 text-xl border-secondary-a rounded-t p-4 border border-solid border-b-tertiary-a flex bg-primary justify-between w-full h-[65px]">
                                    <div className="flex items-center relative">
                                        <i className="fa-solid fa-magnifying-glass absolute ml-3 fa-sm"></i>
                                        <input type="text" name="search" className="pl-8 bg-accent-a rounded-lg placeholder-secondary border-tertiary-b border border-solid shadow-inner text-sm h-[30px]"
                                            placeholder="Search for projects"
                                        >
                                        </input>
                                    </div>

                                    <div className="flex relative items-center">
                                        <i className="fa-solid fa-stopwatch absolute ml-3"></i>
                                        <button className="bg-accent-a font-semibold h-7 px-2 pr-3 pl-8">START</button>
                                        <p className="pl-2">00:00:00</p>
                                    </div>                                    
                                </div>


                            </div>
                        </div>
                    </>)}
        </div>)
}





export default TimeTrackerPage;