import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaServer, FaDatabase, FaPalette, FaChevronRight, FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import '../styles/home.css';

const Home = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'work', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Modern Bread & Bagel",
      description: "A responsive e-commerce website for a bakery with online ordering system",
      image: "/project1.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Healthcare Portal",
      description: "Patient management system with appointment scheduling",
      image: "/project2.jpg",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Travel Booking App",
      description: "Full-stack travel booking platform with real-time availability",
      image: "/project3.jpg",
      tags: ["React Native", "Firebase"],
      link: "#"
    }
  ];

  const skills = [
    {
      category: "Frontend Magic ✨",
      icon: <FaCode />,
      items: [
        "React.js - Building beautiful UIs",
        "Vue.js - Creating interactive experiences",
        "JavaScript - Making things come alive",
        "HTML/CSS - Crafting pixel-perfect designs",
        "Responsive Design - Making it look great everywhere"
      ],
      color: "#FFD700" // Gold
    },
    {
      category: "Backend Powers 🚀",
      icon: <FaServer />,
      items: [
        "Node.js - Powering the backend",
        "Express - Fast and reliable servers",
        "Python - Smart and efficient solutions",
        "RESTful APIs - Connecting the dots",
        "GraphQL - Modern data fetching"
      ],
      color: "#4CAF50" // Green
    },
    {
      category: "Data Wizardry 🔮",
      icon: <FaDatabase />,
      items: [
        "MongoDB - Flexible data storage",
        "PostgreSQL - Reliable and robust",
        "MySQL - Traditional but powerful",
        "Firebase - Real-time magic",
        "Cloud Storage - Scalable solutions"
      ],
      color: "#2196F3" // Blue
    }
  ];

  return (
    <section className={`home-section ${isDarkMode ? 'dark-mode' : ''} ${isLoaded ? 'loaded' : ''}`}>
  

      <div className="home-container">
        <div id="hero" className="hero-section">
          <div className="content-wrapper">
            <div className="text-content">
              <div className="title-container">
                <h1 className="main-title highlight animate-title">
                  {['N', 'I', 'M', 'M', 'I'].map((letter, index) => (
                    <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>{letter}</span>
                  ))}
                </h1>
                
                <div className="role-tag slide-up">I'M A WEBDEVELOPER</div>
                <div className="hero-description fade-in">
                  Crafting beautiful and functional web experiences
                </div>
                <div className="social-links fade-in">
                  <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaGithub />
                  </a>
                  <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="image-container float-in">
              <div className="image-wrapper">
                <div className="profile-image">
                  <img src="/nimmi.png" alt="Nimmi" className="morph-animation" />
                </div>
                <div className="dot-pattern animate-pattern"></div>
              </div>
            </div>
          </div>
        </div>

        <div id="about" className="about-section">
          <div className="section-header fade-in">
            <span className="section-number">01</span>
            <h2 className="section-title">SKILLS & EXPERTISE</h2>
          </div>
          <div className="about-content">
            <div className="about-grid">
             
              <div className="skills-overview">
                <div 
                  className="skill-box"
                  style={{ '--accent-color': '#FFD700' }}
                >
                  <div className="skill-header">
                    <span className="skill-icon"><FaCode /></span>
                    <h3>Frontend Magic ✨</h3>
                  </div>
                  <ul className="skill-list">
                    <li className="skill-item">React.js - Building beautiful UIs</li>
                    <li className="skill-item">Vue.js - Creating interactive experiences</li>
                    <li className="skill-item">JavaScript - Making things alive</li>
                    <li className="skill-item">HTML/CSS - Pixel-perfect designs</li>
                  </ul>
                </div>

                <div 
                  className="skill-box"
                  style={{ '--accent-color': '#4CAF50' }}
                >
                  <div className="skill-header">
                    <span className="skill-icon"><FaServer /></span>
                    <h3>Backend Powers 🚀</h3>
                  </div>
                  <ul className="skill-list">
                    <li className="skill-item">Node.js - Server-side magic</li>
                    <li className="skill-item">Express - Fast & reliable APIs</li>
                    <li className="skill-item">Python - Smart solutions</li>
                    <li className="skill-item">RESTful APIs - Connectivity</li>
                  </ul>
                </div>

                <div 
                  className="skill-box"
                  style={{ '--accent-color': '#2196F3' }}
                >
                  <div className="skill-header">
                    <span className="skill-icon"><FaDatabase /></span>
                    <h3>Data Wizardry 🔮</h3>
                  </div>
                  <ul className="skill-list">
                    <li className="skill-item">MongoDB - Flexible storage</li>
                    <li className="skill-item">PostgreSQL - Robust databases</li>
                    <li className="skill-item">MySQL - Reliable data</li>
                    <li className="skill-item">Firebase - Real-time magic</li>
                  </ul>
                </div>
              </div>
              <div className="view-more fade-in">
                <button onClick={() => navigate('/skills')} className="view-more-btn">
                  View All Skills <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="work" className="work-section">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">MY WORK</h2>
          </div>
          <div className="work-grid">
            {projects.map((project, index) => (
              <div key={index} className="work-card">
                <div className="work-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="work-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <a href={project.link} className="view-project-btn">View Project</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        // Update the contact section in Home.js
<div id="contact" className="contact-section">
  <div className="section-number">03</div>
  <h2 className="contact-title">GET IN TOUCH</h2>
  
  <div className="contact-content">
    <div className="contact-info">
      <p className="contact-description">
        Have a project in mind? Let's work together to create something amazing.
      </p>
      
      <div className="contact-links">
        <a href="mailto:your.email@example.com" className="contact-link">
          <FaEnvelope />
          <span>your.email@example.com</span>
        </a>
        <a href="https://linkedin.com/in/your-profile" className="contact-link">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/your-username" className="contact-link">
          <FaGithub />
          <span>GitHub</span>
        </a>
      </div>
    </div>

    <div className="contact-form">
      <input type="text" placeholder="Your Name" className="form-input" />
      <input type="email" placeholder="Your Email" className="form-input" />
      <textarea placeholder="Your Message" className="form-input" rows="4"></textarea>
      <button type="submit" className="send-btn">
        Send Message
      </button>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Home;
