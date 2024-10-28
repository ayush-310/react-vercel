import React from 'react';

function Card({ data }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 m-4">
            <img className="w-full h-48 object-cover" src={data.image} alt={data.title} />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{data.title}</h3>
                <p className="text-gray-600">{data.year}</p>
            </div>
            <div className="px-4 py-2 bg-gray-100">
                <div className="flex justify-between mb-2">
                    <span className="flex items-center">
                        <h5 className="flex items-center text-gray-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                className="mr-1 w-5 h-5"
                                viewBox="0 0 640 512"
                            >
                                <path d="M96 128...z" /> {/* SVG code */}
                            </svg>
                            {data.people} People
                        </h5>
                    </span>
                    <span className="flex items-center">
                        <h5 className="flex items-center text-gray-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                className="mr-1 w-5 h-5"
                                viewBox="0 0 512 512"
                            >
                                <path d="M32 64...z" /> {/* SVG code */}
                            </svg>
                            {data.type}
                        </h5>
                    </span>
                </div>
                <div className="flex justify-between">
                    <span className="flex items-center">
                        <h5 className="flex items-center text-gray-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                className="mr-1 w-5 h-5"
                                viewBox="0 0 512 512"
                            >
                                <path d="M0 256...z" /> {/* SVG code */}
                            </svg>
                            {data.Speed}
                        </h5>
                    </span>
                    <span className="flex items-center">
                        <h5 className="flex items-center text-gray-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                className="mr-1 w-5 h-5"
                                viewBox="0 0 512 512"
                            >
                                <path d="M495.9 166.6...z" /> {/* SVG code */}
                            </svg>
                            {data.mode}
                        </h5>
                    </span>
                </div>
            </div>
            <div className="p-4">
                <div className="text-right">
                    <h2 className="text-2xl font-bold text-gray-800">${data.price}</h2>
                    <p className="text-gray-600">/month</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
