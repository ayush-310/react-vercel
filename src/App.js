import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Topbar from './Components/Topbar';
import Card from './Components/Card';
import Footer from './Components/Footer';
import data from './data/TemplateData.json';
import Fav from './Components/Fav';
import About from './Components/About';
import { CardDetails } from './Components/CardDetails';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );
  const recordsPerPage = 6;

  const handlePageChange = (newPage) => setCurrentPage(newPage);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <Topbar onSearch={(term) => setSearchTerm(term)} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="grid grid-cols-1 md:px-20 sm:grid-cols-2 lg:grid-cols-3 gap-4  w-full">
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
        <Route path="/cardDetail/:id" element={
          <CardDetails
            isFavorite={(id) => favorites.includes(id)}  // Correct function to check if id is a favorite
            toggleFavorite={toggleFavorite}
          />
        }
        />
      </Routes>


  
    </div>
  );
}

export default App;
