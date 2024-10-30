import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { CardDetails } from './Components/CardDetails';
// import About from './Components/About';
// import Fav from './Components/Fav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />}></Route>
      {/* <Route path="/about" element={<About/>}></Route> */}
      {/* <Route path="/cardDetail/:id" element={<CardDetails />}></Route> */}
      {/* <Route path="/favorite" element={<Fav/>}></Route> */}
    </Routes>
  </BrowserRouter>

);

