import React, { useState } from 'react';
import Uploader from '../components/Uploader';

// npm i react-icons
// can only upload image for now

function FileSystem() {

    const [searchText, setSearchText] = useState('');

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div className=" bg-primary-b flex flex-col justify-center items-center rounded-lg  mt-1 mx-4">
            <div className="bg-primary-b rounded-lg p-2 shadow-lg relative z-50">
                <div className="bg-accent-b rounded-lg p-2 w-full md:w-96">
                    <div className="relative flex items-center">
                        <div className="grid place-items-center h-full w-6 text-secondary marker:-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>

                        <div className="flex-grow">
                            <input
                                className="h-full w-full outline-none text-sm text-secondary 700 pr-2 pl-4 bg-transparent bg-accent-b"
                                type="text"
                                id="search"
                                placeholder="Search files..."
                                value={searchText}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            <Uploader/>

        </div>
    );
}

export default FileSystem;
