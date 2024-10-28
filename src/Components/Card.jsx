import React from 'react';
import { IoMdPeople } from "react-icons/io";
import { BsSpeedometer } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { SiGoogleearthengine } from "react-icons/si";


function Card({ data }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 m-4">
            <img className="w-full h-48 object-cover" src={data.image} alt={data.title} />
            <div className="p-4 flex  justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">{data.title}</h3>
                    <p className="text-gray-600">{data.year}</p>
                </div>

                {/* <div className="text-right">
                    <h2 className="text-2xl font-bold text-gray-800">${data.price}</h2>
                    <p className="text-gray-600">/month</p>
                </div> */}
            </div>



            <div className="px-4 py-2 bg-gray-100">
{/* 
                <ul>
                    <li className="flex items-center gap-2 text-gray-700"> <IoMdPeople className='text-xl' />
                        {data.people} People</li>
                    <li className="flex items-center gap-2 text-gray-700"> <SiGoogleearthengine className='text-xl' />
                        {data.type}</li>
                    <li className="flex items-center gap-2 text-gray-700"> <BsSpeedometer className='text-lg' />{data.Speed}</li>
                    <li className="flex items-center gap-2 text-gray-700"> <FaTools className='text-lg' />
                        {data.mode}</li>
                </ul> */}



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
