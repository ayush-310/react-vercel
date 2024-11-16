import axios from 'axios';
import React, { useState } from 'react';

function CarForm({ refreshCars }) {
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tags: '',
        price: ''
    });

    const [imagePreview, setImagePreview] = useState('');

    // Handle input changes for text fields
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle file input changes and preview
    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);
        if (uploadedFile) {
            setImagePreview(URL.createObjectURL(uploadedFile));
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('file', file);
        formdata.append('title', formData.title);
        formdata.append('description', formData.description);
        formdata.append('tags', formData.tags);
        formdata.append('price', formData.price);

        try {
            await axios.post('http://localhost:3001/upload', formdata);
            refreshCars(); // Refresh the car list in Profile component
            alert('Car added successfully!');
            // Reset form fields
            setFormData({
                title: '',
                description: '',
                tags: '',
                price: ''
            });
            setFile(null);
            setImagePreview('');
        } catch (error) {
            console.error('Error uploading car data:', error);
            alert('Failed to add the car. Please try again.');
        }
    };

    return (
        <div>
            <form
                className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                    Add a New Car
                </h2>

                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-2"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-2"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                        Tags
                    </label>
                    <input
                        type="text"
                        id="tags"
                        name="tags"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-2"
                        value={formData.tags}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price
                    </label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-2"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                        Upload Image
                    </label>
                    <input
                        type="file"
                        id="file"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-2"
                        onChange={handleFileChange}
                        required
                    />
                </div>

                {imagePreview && (
                    <div className="mb-4">
                        <p className="text-sm text-gray-700">Image Preview:</p>
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-32 h-32 object-cover rounded-md"
                        />
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all shadow-md"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default CarForm;
