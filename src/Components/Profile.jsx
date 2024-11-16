import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarForm from './CarForm'; // Ensure this path is correct

function Profile() {
    const [showForm, setShowForm] = useState(false);
    const [cars, setCars] = useState([]);

    // Fetch stored car data from the database
    const fetchCars = async () => {
        try {
            const response = await axios.get('http://localhost:3001/cars'); // Ensure the endpoint matches your backend
            setCars(response.data); // Populate cars state with fetched data
        } catch (error) {
            console.error('Error fetching car data:', error);
        }
    };

    // Fetch cars on component mount
    useEffect(() => {
        fetchCars();
    }, []);

    // Toggle form visibility
    const handleButtonClick = () => {
        setShowForm((prevState) => !prevState);
    };

    // Handle Edit action
    const handleEdit = (car) => {
        console.log('Editing car:', car);
    };

    // Handle Delete action with confirmation
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this car?');
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3001/cars/${id}`); // Delete the car by its ID
                fetchCars(); // Refresh the list after deletion
            } catch (error) {
                console.error('Error deleting car:', error);
            }
        }
    };

    return (
        <>
            {/* Button to toggle CarForm */}
            <button
                onClick={handleButtonClick}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
            >
                {showForm ? 'Hide Form' : 'Post a Car'}
            </button>

            <div className="p-4 flex gap-3">
                {/* Show CarForm when button is clicked */}
                {showForm && (
                    <div className="mt-4">
                        <CarForm refreshCars={fetchCars} /> {/* Pass refreshCars as a prop to reload cars after submission */}
                    </div>
                )}

                {/* Grid to display fetched car cards */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cars.map((car) => (
                        <div key={car._id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 m-4">
                            {/* Adjust the image path */}
                            <img className="w-full h-48 object-cover" src={`/images/${car.image}`} alt={car.title} />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">{car.title}</h3>
                                <p className="text-gray-600 mt-2">{car.description}</p>
                                <div className="mt-4">
                                    <span className="text-2xl font-bold text-gray-800">${car.price}</span>
                                    <span className="text-gray-600"> /month</span>
                                </div>
                                <div className="mt-4 flex gap-2">
                                    <button
                                        onClick={() => handleEdit(car)}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-all"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(car._id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Profile;


