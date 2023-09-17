import React, { useState } from 'react';
import { Table } from '../components/Table';
import { Modal } from '../components/Modal';

function EmployeeRequest() {
    const [searchText, setSearchText] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        { subject: "Frontend Design", recipient: "John Smith", message: "Finish the design" },
        { subject: "Backend Code", recipient: "Vincent Fabron", message: "Edit the component" },
        { subject: "Github Repository", recipient: "Juan Dela Cruz", message: "Update the repository" },
    ]);
    
    const [rowToEdit, setRowToEdit] = useState(null);

    const handleDeleteRow = (targetIndex) => {
        setRows(rows.filter((_, idx) => idx !== targetIndex));
    };

    const handleEditRow = (idx) => {
        setRowToEdit(idx);
        setModalOpen(true);
    };

    const handleSubmit = (newRow) => {
        rowToEdit === null
            ? setRows([...rows, newRow])
            : setRows(
                rows.map((currRow, idx) => {
                    if (idx !== rowToEdit) return currRow;
                    return newRow;
                })
            );
    };

    return (
        <div className="bg-primary-b flex flex-col justify-center items-center rounded-lg mt-1 mx-4">
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
                                placeholder="Search Request..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-h-[calc(100vh-300px)] overflow-y-auto w-full">
                <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
            </div>
            
            <button
                className="bg-accent-b hover:bg-accent-a text-white font-bold py-2 px-4 rounded-full flex items-center"
                onClick={() => setModalOpen(true)}
            >
                + Request
            </button>
            
            {modalOpen && (
                <Modal
                    closeModal={() => {
                        setModalOpen(false);
                        setRowToEdit(null);
                    }}
                    onSubmit={handleSubmit}
                    defaultValue={rowToEdit !== null && rows[rowToEdit]}
                />
            )}
        </div>
    );
}

export default EmployeeRequest;

