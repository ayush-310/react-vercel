import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from "../data/TemplateData.json";

export function CardDetails() {
    const { id } = useParams();
    const selectedCard = data.find(card => card.id === parseInt(id));

    if (!selectedCard) {
        return <div className="text-center text-red-500 mt-10">Card not found</div>;
    }

    return (
        <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
            <div className="container mx-auto p-4 rounded-lg shadow-lg bg-white">
                <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
                    
                    <div className="w-full flex  md:w-1/2 items-center justify-center">
                        <img
                            className="rounded-lg object-cover w-full  md:w-[70%]"
                            src={selectedCard.image}
                            alt={selectedCard.title}
                        />
                    </div>

                    <div className="w-full md:w-1/2 space-y-4 text-gray-700">
                        <p className="text-xl font-bold"><span className="text-gray-500">Name:</span> {selectedCard.title}</p>
                        <p><span className="text-gray-500">Year:</span> {selectedCard.year}</p>
                        <p><span className="text-gray-500">People:</span> {selectedCard.people}</p>
                        <p><span className="text-gray-500">Type:</span> {selectedCard.type}</p>
                        <p><span className="text-gray-500">Speed:</span> {selectedCard.Speed}</p>
                        <p><span className="text-gray-500">Mode:</span> {selectedCard.mode}</p>
                        <p><span className="text-gray-500">Price:</span> ${selectedCard.price}</p>
                        <p><span className="text-gray-500">Description:</span> {selectedCard.description}</p>
                        <div className="mt-4">
                        <Link to="/" 
                        className="inline-block px-6 py-2 text-black border border-stone-950 rounded-md hover:bg-black hover:text-white transition duration-200">
                            Back
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
