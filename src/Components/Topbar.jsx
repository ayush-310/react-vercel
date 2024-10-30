import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Topbar({ onSearch }) {
    return (
        <div className="flex flex-col md:flex-row w-100 justify-between rounded-md items-center p-4 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg">
            <div className="relative flex items-center w-full max-w-md mb-4 md:mb-0">
                <FaSearch className="absolute left-3 text-black  opacity-70" />
                <input
                    type="text"
                    placeholder="Search here..."
                    className="pl-10 mr-3 pr-4 py-2 w-full border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                    onChange={(event) => onSearch(event.target.value)}
                />
            </div>
            <div className="flex space-x-4 text-white text-lg font-semibold">
                <Link to="/" className="hover:text-yellow-300 transition-colors duration-200">Home</Link>
                <Link to="/about" className="hover:text-yellow-300 transition-colors duration-200">About</Link>
                <Link to="/favorite" className="hover:text-yellow-300 transition-colors duration-200">Favorite</Link>
            </div>
        </div>
    );
}

export default Topbar;
