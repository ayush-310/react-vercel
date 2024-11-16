import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Signup from './Signup';
import Login from './Login';
import { CardDetails } from './Components/CardDetails';
import About from './Components/About';
import Fav from './Components/Fav';
import Footer from './Components/Footer';
import Card from './Components/Card';
import Topbar from './Components/Topbar';
import Profile from './Components/Profile';
import data from './data/TemplateData.json';

const RecordsDisplay = ({ records, favorites, toggleFavorite }) => (
  <div className="grid grid-cols-1 md:px-20 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full">
    {records.map((item) => (
      <Card
        key={item.id}
        data={item}
        isFavorite={favorites.includes(item.id)}
        toggleFavorite={toggleFavorite}
      />
    ))}
  </div>
);

const Layout = ({ children, onSearch }) => (
  <div className="flex flex-col items-center">
    <Topbar onSearch={onSearch} />
    {children}
  </div>
);

function Main() {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/register/*" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<App />} />
        <Route
          path="/about"
          element={
            <Layout onSearch={setSearchTerm}>
              <About />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout onSearch={setSearchTerm}>
              <Profile />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout onSearch={setSearchTerm}>
              <RecordsDisplay
                records={records}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
              <Footer
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </Layout>
          }
        />
        <Route
          path="/favorite"
          element={
            <Layout onSearch={setSearchTerm}>
              <Fav
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                searchTerm={searchTerm}
                onSearch={setSearchTerm}
              />
            </Layout>
          }
        />
        <Route
          path="/cardDetail/:id"
          element={
            <Layout onSearch={setSearchTerm}>
              <CardDetails
                isFavorite={(id) => favorites.includes(id)}
                toggleFavorite={toggleFavorite}
              />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
