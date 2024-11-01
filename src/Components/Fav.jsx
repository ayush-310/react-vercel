import React from 'react';
import Card from './Card';
import data from '../data/TemplateData.json';

function Fav({ favorites = [], toggleFavorite, searchTerm }) {
    const favoriteCards = data
        .filter((item) => favorites.includes(item.id))
        .filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
                <h2 className="text-2xl my-5 font-semibold text-gray-800">Favorite Cards</h2>
            <div className="min-h-screen flex flex-col items-center bg-gray-50 ">
                <div className="grid grid-cols-1 md:px-20 sm:grid-cols-2 lg:grid-cols-3 gap-4  w-full">
                    {favoriteCards.map((item) => (
                        <Card
                            key={item.id}
                            data={item}
                            isFavorite={true}
                            toggleFavorite={toggleFavorite}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Fav;
