import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
// import { useNavigate } from 'react-router-dom';
import { 
  FaCode, FaServer, FaDatabase, FaPalette, FaChevronRight, 
  FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaReact, 
  FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaAws, FaVuejs 
} from 'react-icons/fa';
import { SiNuxtdotjs } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/home.css';

const Home = () => {
  const { isDarkMode } = useTheme();
  // const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  useEffect(() => {
    // Scroll to top on component mount
    // window.scrollTo(0, 0);
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

  const skillIcons = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Vue.js", icon: <FaVuejs />, color: "#4FC08D" },
    { name: "Nuxt.js", icon: <SiNuxtdotjs />, color: "#00DC82" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "Database", icon: <FaDatabase />, color: "#336791" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "AWS", icon: <FaAws />, color: "#FF9900" },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/nimmi-alampatta',
      label: 'Connect with me'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/nimmialampatt',
      label: 'Check out my code'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:nimmialampatta@gmail.com',
      label: 'Send me an email'
    }
  ];

  return (
    <section className={`home-section ${isDarkMode ? 'dark-mode' : ''} ${isLoaded ? 'loaded' : ''}`}>
      <div className="home-container">
        <div className="dot-pattern"></div>
        <motion.div 
          className="hero-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="title-container">
                <h1 className="main-title highlight animate-title">
                  {['N', 'I', 'M', 'M', 'I',' '].map((letter, index) => (
                    <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>{letter}</span>
                  ))}
                    {['A','L','A','M','P','A','T','T','A'].map((letter, index) => (
                    <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>{letter}</span>
                  ))}
                </h1>
                
                <div className="role-tag slide-up">I'M A WEBDEVELOPER</div>
                <div className="hero-description fade-in">
                  Crafting beautiful and functional web experiences
                </div>
                <div className="social-links-home fade-in">
                  <a 
                    href="https://linkedin.com/in/nimmi-alampatta" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link linkedin"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin />
                    <span className="social-label">LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/nimmialampatt" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link github"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub />
                    <span className="social-label">GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="profile-image">
                <img src="/nimmi.png" alt="Nimmi" className="morph-animation" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div id="about" className="about-section">
          <div className="section-header fade-in">
            <span className="section-number">01</span>
          </div>
          <div className="about-content">
            <div className="skills-slider">
              <div className="skills-track">
                {[...skillIcons, ...skillIcons].map((skill, index) => (
                  <div 
                    key={index}
                    className="skill-icon-box"
                    style={{ '--skill-color': skill.color }}
                  >
                    <div className="skill-icon-wrapper">
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="view-more fade-in">
              <button onClick={() => navigate('/skills')} className="view-more-btn">
                View All Skills <FaChevronRight />
              </button>
            </div> */}
          </div>
        </div>

{/* 
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

            {/* <div className="contact-form">
              <input type="text" placeholder="Your Name" className="form-input" />
              <input type="email" placeholder="Your Email" className="form-input" />
              <textarea placeholder="Your Message" className="form-input" rows="4"></textarea>
              <button type="submit" className="send-btn">
                Send Message
              </button>
            </div> */}
          {/* </div> */}
        {/* </div>  */}
      </div>
    </section>
  );
};

export default Home;
