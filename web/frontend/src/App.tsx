import React from 'react';
import {Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/App.css';
import { Home } from './pages/Home';
import { Header } from './pages/components/Header';
import { Footer } from './pages/components/Footer';

export const App: React.FC  = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-fixed bg-no-repeat bg-cover backdrop-blur-sm" id="journal-scroll" style={{backgroundImage: `url(${require('./assets/Image/home.jpg')})`}}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}