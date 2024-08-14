import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Layouts/Header'
import Project from './pages/Project'
import About from './pages/About'
import HomePage from './pages/HomePage'
import Footer from './components/Layouts/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<About />} />
    <Route path="/project" element={<Project/>} />
  </Routes>
  <Footer />
</BrowserRouter>
);

reportWebVitals();
