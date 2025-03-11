import React, { useState, useEffect } from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes, FaFileAlt } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import '../styles/navbar.css';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', path: '/about' },
    { name: 'Works', id: 'recent-works' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="navbar-container">
      <div className="logo" onClick={() => navigate('/')}>
            <span className="logo-text" aria-label="Nimmi Alampatta">NA</span>
          </div>

        {/* Resume button between logo and menu */}
        <div className="nav-right desktop-only">
          <button 
            className="resume-btn pulse-animation"
            onClick={handleResumeDownload}
            aria-label="Download Resume"
          >
            <span>Resume</span>
            <FaFileAlt className="resume-icon" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes className="close-icon" /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
          {navItems.map((item, index) => (
            <Link 
              key={index}
              to={item.path || `/?section=${item.id}`}
              onClick={() => scrollToSection(item.id)}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}

          {/* <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
