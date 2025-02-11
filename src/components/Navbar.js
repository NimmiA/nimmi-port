import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaBars, FaTimes, FaFileAlt } from 'react-icons/fa';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        setActiveSection(id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  const handleNavigation = (item) => {
    if (item.path) {
      navigate(item.path);
    } else if (location.pathname !== '/') {
      navigate(`/?section=${item.id}`);
    } else {
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', path: '/about' },
    { name: 'Works', id: 'recent-works' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-content">
        <div className="nav-left">
          <div className="logo" onClick={() => navigate('/')}>
            <span className="logo-text" aria-label="Nimmi Alampatta">NA</span>
          </div>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {navItems.map((item, index) => (
            
              <div 
                key={index}
                className={`nav-item ${
                  item.path 
                    ? location.pathname === item.path ? 'active' : ''
                    : activeSection === item.id ? 'active' : ''
                }`}
              >
                <button
                  className="nav-button"
                  onClick={() => handleNavigation(item)}
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="nav-right">
          <button 
            className="resume-btn pulse-animation"
            onClick={handleResumeDownload}
            aria-label="Download Resume"
          >
            <span>Resume</span>
            <FaFileAlt className="resume-icon" />
          </button>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
