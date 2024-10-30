import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Topbar from './Components/Topbar';
import Card from './Components/Card';
import Footer from './Components/Footer';
import data from './data/TemplateData.json';
import Fav from './Components/Fav';
import About from './Components/About';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]); // New state for favorite cards
  const recordsPerPage = 6;

  const handlePageChange = (newPage) => setCurrentPage(newPage);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-4">
      <Topbar onSearch={(term) => setSearchTerm(term)} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full">
                {records.map((item) => (
                  <Card
                    key={item.id}
                    data={item}
                    isFavorite={favorites.includes(item.id)}
                    toggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
              <Footer
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          }
        />
        <Route
          path="/favorite"
          element={
            <Fav
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              searchTerm={searchTerm}
              onSearch={setSearchTerm}
            />
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
