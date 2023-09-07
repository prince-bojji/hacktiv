import React, { useState } from 'react';

function EmployeeRequest() {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
      };

      const closePopup = () => {
          setPopupVisible(false);
      };
  

    return (
        <div className="bg-primary-b flex flex-col justify-center items-left rounded-lg ml-48 mr-80 mt-1 w-full">
            <div className="bg-primary-b rounded-lg p-4 shadow-lg relative z-10">
                <div className="bg-accent-b rounded-lg p-2 w-96">
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
                                className="h-full w-full outline-none text-sm text-secondary 700 pr-2 pl-4 bg-transparent bg-accent-b" // Added bg-accent-b
                                type="text"
                                id="search"
                                placeholder="Search files..."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4 right-4 mt-48"> 
                <button
                    className="flex items-center bg-accent-b text-white rounded-full p-2" 
                    onClick={togglePopup}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                    Request
                </button>
            </div>


            {isPopupVisible && (
                <div className="fixed bottom-0 left-10 right-10 p-4" >
                    <div className="rounded-lg p-4 shadow-lg w-full mx-auto bg-transparent">
                       
                        <div className="mb-4">
                            <input
                                className="w-full outline-none text-sm text-secondary 700 pr-2 pl-4 bg-transparent bg-primary-b" // Added bg-accent-b
                                type="text"
                                placeholder="Subject:"
                            />
                        </div>

                       
                        <div className="mb-4">
                            <input
                                className="w-full outline-none text-sm text-secondary 700 pr-2 pl-4 bg-transparent bg-primary-b" 
                                placeholder="To:"
                            />
                        </div>

                       
                        <div className="mb-4">
                            <textarea
                                className="w-full h-32 resize-none outline-none text-sm text-secondary 700 pr-2 pl-4 bg-transparent bg-primary-b" 
                                placeholder="Message"
                            />
                        </div>

                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-accent-b text-secondary rounded-full p-2"
                                onClick={closePopup}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EmployeeRequest;