import React, { useEffect, useState } from 'react';

// json-server --watch src/Data/er.json --port3000
// http://localhost:3000/request

function EmployeeRequest() {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const [content, setContent] = useState(<EmployeeList showForm={showForm}/>);

    function showList() {
        setContent(<EmployeeList showForm={showForm}/>);
    }
    
    function showForm(request) {
        setContent(<EmployeeForm request={request} showList={showList}/>);
    }

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
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5"> 
                {content}
            </div>
            
        </div>
    );
}

function EmployeeList(props) {
    const [request, setRequest] = useState([]);

    function fetchRequest() {
        fetch("http://localhost:3000/request")
        .then((response) => {
            if(!response.ok) {
                throw new Error("Unexpected Server Response");
            }
            return response.json()
        })
        .then((data) => {
            //console.log(data);
            setRequest(data);
        })
        .catch((error) => console.log("Error: ", error));
    }

    //fetchRequest();
    useEffect(() => fetchRequest(), []);

    function deleteProduct(id) {
        fetch("http://localhost:3000/request/" + id, {
            method: "DELETE"
        })
            .then((response) => response.json())
            .then((data) => fetchRequest());
    }

    return (
        <>
            <div className='px-5 py-2'>
                <div className="flex justify-between mb-3">
                    <button
                        type="button"
                        className="bg-accent-b hover:bg-accent-a text-white font-bold py-2 px-4 rounded-full flex items-center"
                        onClick={() => props.showForm({})}
                    >
                        Create
                    </button>
                    <button
                        type="button"
                        className="bg-accent-b hover:bg-accent-a text-white font-bold py-2 px-4 rounded-full flex items-center"
                        onClick={() => fetchRequest()}
                    >
                        Refresh
                    </button>
                </div>
            </div>
            <div className='w-full border border-tertiary-a rounded-t text-[14px] lg:text-[16px]'>
                <div className='flex justify-between rounded-t rounded-t p-5 py-4 bg-accent-a'>
                    <p className='text-[16px] font-bold text-teriary'>Employee Request</p>
                </div>
                <div className='px-5 py-2'>
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <th className='text-left'>ID</th>
                                <th className='text-left'>Subject</th>
                                <th className='text-left'>Recipient</th>
                                <th className='text-left'>Message</th>
                                <th className='text-left'>Action</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                request.map((request, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{request.id}</td>
                                            <td>{request.subject}</td>
                                            <td>{request.recipient}</td>
                                            <td>{request.message}</td>
                                            <td className="flex">
                                                <button type="button" className="bg-accent-b hover:bg-accent-a text-white font-bold py-2 px-4 rounded-full mr-2"
                                                onClick={() => props.showForm(request)}>
                                                    Edit
                                                </button>
                                                <button type="button" className="bg-accent-b hover:bg-accent-a text-white font-bold py-2 px-4 rounded-full mr-2"
                                                onClick={() => deleteProduct(request.id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>

                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
         </div>
        </>
    );
}

function EmployeeForm(props) {
    const [errorMessage, setErrorMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
    
        // read form data
        const formData = new FormData(event.target);
    
        // convert formData to object
        const request = Object.fromEntries(formData.entries());
    
        // form validation
        if (!request.subject || !request.recipient || !request.message) {
            console.log("Please provide all the required fields!");
            setErrorMessage(
                <div className="alert alert-warning" role="alert">
                    Please provide all the required fields!
                </div>
            )
            return;
        }
        
        if (props.request.id) {
            // update the product
            fetch("http://localhost:3000/request/" + props.request.id, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(request)
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not OK: ${response.status} - ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                // Request was successfully added
                console.log("Request added successfully:", data);
                props.showList(); // Update the list
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        }
        else {
            // create a new product
            request.createdAt = new Date().toISOString().slice(0, 10);
            fetch("http://localhost:3000/request", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(request)
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not OK: ${response.status} - ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                // Request was successfully added
                console.log("Request added successfully:", data);
                props.showList(); // Update the list
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        }
    }
    

    return (
      <>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-[white] w-[20em] p-8 rounded-[5px]">
                    {errorMessage}
                    <form id="employeeForm" onSubmit={(event) => handleSubmit(event)}>
                        {props.request.id && <div className="mb-6">
                            <label htmlFor="id" className="block text-black text-sm font-bold mb-2">
                            ID
                            </label>
                            <input
                            readOnly className="form-control-plaintext" 
                            name="name"
                            defaultValue={props.request.id}
                            />
                        </div>}
                        <div className="mb-6">
                            <label htmlFor="subject" className="block text-black text-sm font-bold mb-2">
                            Subject
                            </label>
                            <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-blue-100"
                            placeholder="Enter Subject" 
                            defaultValue={props.request.subject}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="recipient" className="block text-black text-sm font-bold mb-2">
                            Recipient
                            </label>
                            <input
                            type="text"
                            id="recipient"
                            name="recipient"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-green-100"
                            placeholder="Enter Recipient" 
                            defaultValue={props.request.recipient}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-black text-sm font-bold mb-2">
                            Message
                            </label>
                            <textarea
                            id="message"
                            name="message"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-yellow-100 resize-y"
                            placeholder="Enter Message"
                            defaultValue={props.request.message}
                            />
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-accent-b hover:bg-accent-a text-white font-bold py-2 px-4 rounded-full mr-2">
                                Save
                            </button>
                            <button
                            type="button"
                            className="bg-accent-b hover:bg-accent-a text-white font-bold py-2 px-4 rounded-full flex items-center"
                            onClick={() => props.showList()}
                            >
                            Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
      </>
    );
}
  
  
export default EmployeeRequest;