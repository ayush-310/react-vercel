import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Topbar({ onSearch }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmed = window.confirm('Are you sure to logout?');
        if (confirmed) {
            navigate('/login');
        }
    };

    return (
        <div className="flex flex-col m-5  md:flex-row w-[87%] justify-between rounded-md items-center p-4 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg">
            <div className="relative flex items-center w-full max-w-md mb-4 md:mb-0">
                <FaSearch className="absolute left-3 text-black  opacity-70" />
                <input
                    type="text"
                    placeholder="Search here..."
                    className="pl-10 mr-3 pr-4 py-2 w-full border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                    onChange={(event) => onSearch(event.target.value)}
                />
            </div>
            <div className="container mx-auto flex justify-end items-center">
                <div>
                    <Link to="/home" className="text-gray-300 hover:text-white mx-2">Home</Link>
                    {/* <Link to="/about" className="text-gray-300 hover:text-white mx-2">About</Link> */}
                    <Link to="/favorite" className="text-gray-300 hover:text-white mx-2">Favorites</Link>
                    <Link to="/profile" className="text-gray-300 hover:text-white mx-2">Profile</Link>
                    <button onClick={handleLogout} className="text-gray-300 hover:text-white mx-2">Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
