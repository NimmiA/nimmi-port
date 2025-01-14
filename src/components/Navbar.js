import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun, FaDownload, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleResumeDownload = () => {
    window.open('/resume.pdf', '_blank');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : ''}`}>
      <div className="nav-content">
        <div className="nav-brand">
          <Link to="/" className="brand-text">Nimmi Alampatta</Link>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <Link 
              className={`nav-text ${location.pathname === '/' ? 'active' : ''}`} 
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              className={`nav-text ${location.pathname === '/about' ? 'active' : ''}`} 
              to="/about"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              className={`nav-text ${location.pathname === '/projects' ? 'active' : ''}`} 
              to="/projects"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link 
              className={`nav-text ${location.pathname === '/skills' ? 'active' : ''}`} 
              to="/skills"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link 
              className={`nav-text ${location.pathname === '/experience' ? 'active' : ''}`} 
              to="/experience"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
            <Link 
              className={`nav-text ${location.pathname === '/contact' ? 'active' : ''}`} 
              to="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </Link>
          </div>
          <div className="nav-actions">
            <button 
              className="resume-btn bounce-animation"
              onClick={handleResumeDownload}
            >
              <FaDownload className="download-icon" />
              <span>Resume</span>
            </button>
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
