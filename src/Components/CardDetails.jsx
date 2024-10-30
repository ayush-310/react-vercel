import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from "../data/TemplateData.json";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export function CardDetails({ isFavorite, toggleFavorite }) {
    const { id } = useParams();
    const selectedCard = data.find(card => card.id === parseInt(id));

    if (!selectedCard) {
        return <div className="text-center text-red-500 mt-10">Card not found</div>;
    }

    return (
        <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
            <div className="container mx-auto p-4 rounded-lg shadow-lg bg-white">
                <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">

                    <div className="w-full flex md:w-1/2 items-center justify-center">
                        <img
                            className="rounded-lg object-cover w-full md:w-[70%]"
                            src={selectedCard.image}
                            alt={selectedCard.title}
                        />
                    </div>

                    <div className="w-full md:w-1/2 space-y-4 text-gray-700">
                        <p className="text-2xl font-extrabold text-gray-800 mb-2">
                            <span className="text-gray-500 font-medium">Name:</span> {selectedCard.title}
                        </p>
                        <p className="text-lg">
                            <span className="text-gray-500 font-semibold">Year:</span> {selectedCard.year}
                        </p>
                        <p className="text-lg">
                            <span className="text-gray-500 font-semibold">People:</span> {selectedCard.people}
                        </p>
                        <p className="text-lg">
                            <span className="text-gray-500 font-semibold">Type:</span> {selectedCard.type}
                        </p>
                        <p className="text-lg">
                            <span className="text-gray-500 font-semibold">Speed:</span> {selectedCard.Speed}
                        </p>
                        <p className="text-lg">
                            <span className="text-gray-500 font-semibold">Mode:</span> {selectedCard.mode}
                        </p>
                        <p className="text-lg font-semibold text-blue-700">
                            <span className="text-gray-500 font-semibold">Price:</span> ${selectedCard.price}
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                            <span className="text-gray-500 font-semibold">Description:</span> {selectedCard.description}
                        </p>
                        <div onClick={() => toggleFavorite(selectedCard.id)}>
                            {isFavorite(selectedCard.id) ? (
                                <FaHeart className="text-red-500 cursor-pointer" />
                            ) : (
                                <FaRegHeart className="text-gray-500 cursor-pointer" />
                            )}
                        </div>
                        <div className="mt-6">
                            <Link
                                to="/"
                                className="inline-block px-6 py-2 text-black border border-gray-800 rounded-md hover:bg-black hover:text-white transition duration-200">
                                Back
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
