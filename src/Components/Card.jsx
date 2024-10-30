import React from 'react';
import { IoMdPeople } from "react-icons/io";
import { BsSpeedometer } from "react-icons/bs";
import { FaTools, FaHeart, FaRegHeart } from "react-icons/fa";
import { SiGoogleearthengine } from "react-icons/si";
import { Link } from 'react-router-dom';

function Card({ data, isFavorite, toggleFavorite }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 m-4">
            <img className="w-full sm:h-72 object-cover" src={data.image} alt={data.title} />
            <div className="p-4 flex justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">{data.title}</h3>
                    <p className="text-gray-600">{data.year}</p>
                </div>
                <div onClick={() => toggleFavorite(data.id)}>
                    {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-500" />}
                </div>
            </div>

            <div className="px-4 py-2 bg-gray-100">
                <div className="flex justify-between mb-2">
                    <span className="flex items-center">
                        <h5 className="flex items-center gap-2 text-gray-700">
                            <IoMdPeople className='text-xl' />
                            {data.people} People
                        </h5>
                    </span>
                    <span className="flex items-center">
                        <h5 className="flex items-center gap-2 text-gray-700">
                            <SiGoogleearthengine className='text-xl' />
                            {data.type}
                        </h5>
                    </span>
                </div>
                <div className="flex justify-between">
                    <span className="flex items-center">
                        <h5 className="flex items-center gap-2 text-gray-700">
                            <BsSpeedometer className='text-lg' />{data.Speed}</h5>
                    </span>
                    <span className="flex items-center">
                        <h5 className="flex items-center gap-2 text-gray-700">
                            <FaTools className='text-lg' />
                            {data.mode}
                        </h5>
                    </span>
                </div>
            </div>
            <div className="p-4 flex justify-between">
                <button className="btn">
                    <Link to={`/cardDetail/${data.id}`}>More Details</Link>
                </button>
                <div className="text-right">
                    <h2 className="text-2xl font-bold text-gray-800">${data.price}</h2>
                    <p className="text-gray-600">/month</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
