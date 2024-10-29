import React from 'react';
import { FaSearch } from "react-icons/fa";

function Topbar({ onSearch }) {
    return (
        <div className="flex justify-center p-4 bg-gray-100 shadow-md">
            <div className="relative flex items-center w-full max-w-md">
                <FaSearch className="absolute left-3 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search here..."
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                    onChange={(event) => onSearch(event.target.value)}
                />
            </div>
        </div>
    );
}

export default Topbar;
