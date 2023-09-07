import React, { useState } from 'react';

function TimeTrackerPage() {
    const [timeLogs, setTimeLogs] = useState(false);
    const [projectButton, setProjectButton] = useState(false);

    const date = new Date()

    if (timeLogs) {
        return (
            <>
                <div>
                    <p className="text-lg font-bold">This Week</p>
                    <div className="flex bg-primary-b items-center h-[200px] px-3 pb-[80px]">
                        <div className="flex items-center justify-center bg-accent-a w-[100%] w-[100%] h-[80px]">
                            <i className="fa-solid fa-calendar-days px-1 fa-2xl absolute right-[150px]" style={{ color: '#ffffff' }}></i>
                            <div className="flex gap-[500px]">
                                <p className="font-semibold text-2xl">Date</p>
                                <p className="font-semibold text-2xl">Log in</p>
                                <p className=" font-semibold text-2xl">Log out</p>
                            </div>
                            <p></p>
                        </div>
                    </div>
                    <p className='text-lg font-bold pt-7'>Summary</p>
                    <div className="flex bg-primary-b items-center h-[460px] px-3 pb-[340px]">
                        <div className="flex items-center justify-center bg-accent-a w-[100%] h-[80px]">
                            <i className="fa-solid fa-calendar-days px-1 fa-2xl absolute right-[150px]" style={{ color: '#ffffff' }}></i>
                            <div className="flex gap-[500px]">
                                <p className="font-semibold text-2xl">Date</p>
                                <p className="font-semibold text-2xl">Log in</p>
                                <p className=" font-semibold text-2xl">Log out</p>
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div>
                <div className="flex bg-primary-b items-center h-11 px-3 gap-8">
                    <div className="flex items-center relative">
                        <i className="fa-solid fa-magnifying-glass absolute ml-3 fa-sm"></i>
                        <input type="text" name="search" className="bg-accent-a rounded-lg h-7 text-sm font-semibold placeholder-secondary pr-14 pl-8"
                            placeholder="Search"
                        >
                        </input>
                    </div>

                    <input className="absolute right-[280px] font-semibold outline outline-0 outline-blue-50 focus:outline-2" type="date" name="date" style={{ backgroundColor: 'transparent' }}></input>

                    <div className="absolute right-[93px]">
                        <div className="flex relative items-center">
                            <i className="fa-solid fa-stopwatch absolute ml-3"></i>
                            <button className="bg-accent-a font-semibold h-7 px-2 pr-3 pl-8">START</button>
                            <p className="pl-2">00:00:00</p>
                        </div>
                    </div>

                </div>

                <div className="flex items-center justify-center h-[650px]">
                    <div>
                        <i className="fa-solid fa-stopwatch fa-10x" style={{ color: "#f4ce47" }}></i>
                        <p className="font-semibold pt-3" style={{ textAlign: 'center' }}>Start Tracking!</p>
                    </div>
                </div>

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

                <div className="relative h-[55px]">
                    <div className="absolute bottom-0 right-0">
                        <div className="flex relative items-center">
                            <i className="fa-solid fa-circle-plus absolute ml-2"></i>
                            <button className="bg-accent-a font-bold pl-7 text-xl rounded-lg px-3 h-8" onClick={() => { setProjectButton(!projectButton) }}>Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimeTrackerPage;