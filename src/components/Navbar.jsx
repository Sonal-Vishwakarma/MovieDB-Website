import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Mode from './mode';

const dummySuggestions = [
  'Avengers: Endgame',
  'Inception',
  'The Dark Knight',
  'Interstellar',
  'Spider-Man: No Way Home',
  'Oppenheimer',
  'Joker',
  'The Batman',
  'Dune',
  'Avatar: The Way of Water',
];

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedQuery = localStorage.getItem('searchQuery');
    if (savedQuery) setSearchQuery(savedQuery);
  }, []);

  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
    if (searchQuery.trim()) {
      const filtered = dummySuggestions.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleScroll = () => setShowNavbar(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setIsMenuOpen(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setFilteredSuggestions([]);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-gray-800 shadow-md p-4 z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between relative gap-2">
        <div className="flex justify-between w-full md:w-auto items-center">
          <Link
            to="/"
            className="text-white text-2xl font-bold hover:text-gray-300 transition"
          >
            MovieDB
          </Link>


          <button
            className="md:hidden text-white focus:outline-none z-20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative w-full md:w-auto mt-2 md:mt-0">
          <input
            type="text"
            className="p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {filteredSuggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white text-black rounded-md mt-1 shadow-lg z-50 max-h-48 overflow-y-auto">
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-200 cursor-pointer text-sm"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </form>

        {/* Theme Buttons */}

        <div className="mt-2 md:mt-0 flex justify-center md:justify-end">
          <Mode />
        </div>

        {/* Navigation Links */}
        <div
          className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0 fixed md:static top-0 left-0 w-3/4 md:w-auto h-screen md:h-auto bg-gray-800 md:bg-transparent transition-transform duration-300 ease-in-out md:flex md:space-x-6 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10`}
        >
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 p-6 md:p-0 mt-16 md:mt-0">
            <Link to="/" className="text-white hover:text-gray-300 transition text-lg" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/top-rated" className="text-white hover:text-gray-300 transition text-lg" onClick={() => setIsMenuOpen(false)}>
              Top Rated
            </Link>
            <Link to="/upcoming" className="text-white hover:text-gray-300 transition text-lg" onClick={() => setIsMenuOpen(false)}>
              Upcoming
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-0"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

