import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Layouts/Header'
import Project from './pages/Project'
import Skills from './pages/Skills'
import HomePage from './pages/HomePage'
import Footer from './components/Layouts/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/skill" element={<Skills />} />
    <Route path="/project" element={<Project/>} />
  </Routes>
  <Footer />
</BrowserRouter>
);

reportWebVitals();
