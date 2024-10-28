import React, { useState } from 'react';
import Topbar from './Components/Topbar';
import Card from './Components/Card';
import Footer from './Components/Footer';
import data from './data/TemplateData.json';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;

  const handlePageChange = (newPage) => setCurrentPage(newPage);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-4">
      <Topbar onSearch={(term) => setSearchTerm(term)} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full max-w-5xl">
        {records.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>

      <Footer
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
