import React from 'react';

function Topbar({ onSearch }) {
    return (
        <div className="flex justify-center p-4 bg-gray-100 shadow-md">
            <div className="relative flex items-center w-full max-w-md">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="absolute left-3 w-5 h-5 text-gray-500"
                >
                    {/* Search icon SVG path */}
                    <path d="M505 442.7l-99.7-99.7C429.6 311.3 440 278 440 240 440 107.5 342.5 10 210 10S-20 107.5-20 240s97.5 230 230 230c38 0 71.3-10.4 102.6-29.7l99.7 99.7c15.6 15.6 40.9 15.6 56.5 0l26.2-26.2c15.6-15.6 15.6-40.9 0-56.5zM210 360c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120z" />
                </svg>
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
