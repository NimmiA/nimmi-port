import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaBars, FaTimes, FaFileDownload } from 'react-icons/fa';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'

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
    // window.open('/nim.pdf', '_blank');
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Path to your resume in the public folder
    link.download = "resume.pdf"; // The name for the downloaded file
    link.click();
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-content">
        <div className="nav-left">
          <div className="logo">
            <span className="logo-text" aria-label="Nimmi Alampatta">NA</span>
          </div>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {navItems.map((item, index) => (
              <div 
                key={index}
                className="nav-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a
                  href={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="nav-right">
          <button 
            className="resume-btn"
            onClick={handleResumeDownload}
            aria-label="Download Resume"
          >
            <span>Resume</span>
            {/* <a href='/nim.pdf' download>Click to download</a> */}
            <FaFileDownload />
            
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
