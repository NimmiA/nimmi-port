import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaServer, FaDatabase, FaPalette, FaChevronRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/home.css';

const Home = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
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
      category: "Frontend Development",
      items: ["React.js", "Vue.js", "JavaScript (ES6+)", "HTML5/CSS3", "Responsive Design"]
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express", "Python", "RESTful APIs", "GraphQL"]
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
    }
  ];

  return (
    <section className={`home-section ${isDarkMode ? 'dark-mode' : ''}`}>
      <nav className="home-nav">
        <div className="nav-logo">PORTFOLIO</div>
        <ul>
          <li>
            <button 
              className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
              onClick={() => scrollToSection('hero')}
            >
              <span>Home</span>
            </button>
          </li>
          <li>
            <button 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              <span>About</span>
            </button>
          </li>
          <li>
            <button 
              className={`nav-link ${activeSection === 'work' ? 'active' : ''}`}
              onClick={() => scrollToSection('work')}
            >
              <span>Work</span>
            </button>
          </li>
          <li>
            <button 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              <span>Contact</span>
            </button>
          </li>
        </ul>
      </nav>

      <div className="home-container">
        <div id="hero" className="hero-section">
          <div className="content-wrapper">
            <div className="text-content">
              <div className="title-container">
                <h1 className="main-title">MY NAME IS</h1>
                <h1 className="main-title highlight">NIMMI</h1>
                <div className="role-tag">I'M A UI DEVELOPER</div>
                <div className="hero-description">
                  Crafting beautiful and functional web experiences
                </div>
              </div>
            </div>
            <div className="image-container">
              <div className="image-wrapper">
                <div className="profile-image">
                  <img src="/nimmi.jpeg" alt="Nimmi" />
                </div>
                <div className="dot-pattern"></div>
              </div>
            </div>
          </div>
        </div>

        <div id="about" className="about-section">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2 className="section-title">HELLO</h2>
          </div>
          <div className="about-content">
            <div className="about-grid">
              <div className="about-text">
                <p className="lead-text">
                  I'm a passionate UI Developer based in [Your Location], specializing in 
                  creating exceptional digital experiences.
                </p>
                <p>
                  With a strong foundation in modern frontend technologies and a keen eye 
                  for design, I transform complex problems into elegant solutions. My 
                  approach combines technical expertise with creative thinking to deliver 
                  user-centric applications.
                </p>
              </div>
              <div className="skills-overview">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="skill-group">
                    <h3>{skillGroup.category}</h3>
                    <ul>
                      {skillGroup.items.map((skill, skillIndex) => (
                        <li key={skillIndex}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="dot-pattern-small"></div>
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

        <div id="contact" className="contact-section">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2 className="section-title">GET IN TOUCH</h2>
          </div>
          <div className="contact-content">
            <div className="contact-grid">
              <div className="contact-info">
                <p className="contact-text">
                  Have a project in mind? Let's work together to create something amazing.
                </p>
                <div className="contact-links">
                  <a href="mailto:your.email@example.com" className="contact-link">
                    <FaEnvelope /> your.email@example.com
                  </a>
                  <a href="https://linkedin.com/in/yourprofile" className="contact-link">
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a href="https://github.com/yourusername" className="contact-link">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
              <div className="contact-form">
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message"></textarea>
                  </div>
                  <button type="submit" className="contact-btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
