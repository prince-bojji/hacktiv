import React from "react";

export const Table = ({ rows, deleteRow, editRow }) => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-4 overflow-x-auto">
                <table className="w-full table-auto border-collapse" style={{ margin: "0 0 1rem 0" }}>
                    <thead>
                        <tr>
                            <th
                                className="bg-accent-a text-white font-bold py-2 px-4 rounded-t border border-black sm:w-1/4 md:w-1/5"
                            >
                                Subject:
                            </th>
                            <th
                                className="bg-accent-a text-white font-bold py-2 px-4 rounded-t border border-black sm:w-1/4 md:w-1/5"
                            >
                                Recipient
                            </th>
                            <th
                                className="bg-accent-a text-white font-bold py-2 px-4 rounded-t border border-black sm:w-1/2 md:w-2/5"
                            >
                                Message
                            </th>
                            <th
                                className="bg-accent-a text-white font-bold py-2 px-4 rounded-t border border-black text-center"
                            >
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, idx) => {
                            return (
                                <tr key={idx}>
                                    <td className="border border-black py-2 px-4">{row.subject}</td>
                                    <td className="border border-black py-2 px-4">{row.recipient}</td>
                                    <td className="border border-black py-2 px-4">{row.message}</td>
                                    <td className="border border-black py-2 px-4 text-center">
                                        <button
                                            className="bg-accent-b hover:bg-accent-a text-white font-bold py-2 px-4 rounded-full"
                                            onClick={() => deleteRow(idx)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="bg-accent-b hover:bg-accent-a text-white font-bold py-2 px-4 rounded-full ml-2 mt-2 sm:mt-0"
                                            onClick={() => editRow(idx)}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
