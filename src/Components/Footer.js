import React, { useState, useEffect } from 'react';
import '../Components/Footer.css';
// import data from '../TemplateData.json';

async function fetchData() {
    try {
        const response = await fetch('/src/TemplateData.json'); // Replace with the correct file path
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

function Pagination({ itemsPerPage, totalItems, currentPage, onPageChange }) {
    const [data, setData] = useState([]); // State to store fetched data

    useEffect(() => {
        // Fetch data when the component mounts
        fetchData()
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error('Error loading data:', error);
            });
    }, []);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            onPageChange(newPage);
        }
    };

    // Calculate the current page's data
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    function Footer() {
        return (
            <div className="pagination">
                <span className="page-numbers">
                    Page {currentPage} of {totalPages}
                </span>
                <div className='together'>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        );

    }

    return (
        <div>


            {/* Display current page's data */}
            <ul>
                {currentItems.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>

            {/* Render pagination component */}
            <Footer />
        </div>
    );
}

export default Pagination;


