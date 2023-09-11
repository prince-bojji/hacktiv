import React, { useState } from 'react';

function FileSystem() {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [files, setFiles] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [subject, setSubject] = useState('');
    const [to, setTo] = useState('');
    const [message, setMessage] = useState('');

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    const addFile = (file) => {
        setFiles([...files, file]);
    };

    const removeFile = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };

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

            {files.length === 0 && (
                <div className="flex flex-col justify-center items-center h-64 mt-6 w-[calc(100% - 2rem)]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-20 text-accent-b inline-block"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14-2V5a2 2 0 00-2-2h-5.586a1 1 0 00-.707.293l-2.586 2.586a1 1 0 00-.293.707V19m4 0h-4"
                        />
                    </svg>
                    <p className="text-secondary w-96 text-center mt-2">No Files!</p>
                </div>
            )}

            <div className="flex justify-center mt-4">
                <button
                    className="bg-accent-b hover:bg-accent-a text-white font-bold py-2 px-4 rounded-full flex items-center"
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
                    File
                </button>
            </div>

            {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-primary opacity-100"></div>
                    <div className="bg-primary p-4 rounded-lg shadow-lg z-10 w-full md:w-96">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="text-secondary font-bold bg-accent-c">FileName</th>
                                    <th className="text-secondary font-bold bg-accent-c">Type</th>
                                    <th className="text-secondary font-bold bg-accent-c">Size</th>
                                    <th className="text-secondary font-bold bg-accent-c">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {files.map((file, index) => (
                                    <tr key={index}>
                                        <td className="text-secondary">{file.fileName}</td>
                                        <td className="text-secondary">{file.type}</td>
                                        <td className="text-secondary">{file.size}</td>
                                        <td className="text-secondary">{file.date}</td>
                                        <td className="text-secondary">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 cursor-pointer text-accent-b"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                onClick={() => removeFile(index)}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                />
                                            </svg>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <br>
                        </br>
                        <div className="text-right">
                            <button
                                className="bg-accent-b hover:bg-accent-a text-primary font-bold py-2 px-4 rounded-full"
                                onClick={closePopup}
                            >
                                Delete
                            </button>
                            <button
                                className="bg-accent-c hover:bg-accent-a text-primary font-bold py-2 px-4 rounded-full ml-2"
                                onClick={() => {
                                    closePopup();
                                }}
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

export default FileSystem;
