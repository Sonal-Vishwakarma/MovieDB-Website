import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TopRatedPage from './pages/TopRatedPage';
import UpcomingPage from './pages/UpcomingPage';
import SearchPage from './pages/SearchPage';
import MovieDetailPage from './pages/MovieDetailPage';
import ActorDetailPage from './pages/ActorDetailPage';

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = ''; // clear existing
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }} className="min-h-screen transition-all duration-300">
      <Navbar setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/actor/:id" element={<ActorDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;


