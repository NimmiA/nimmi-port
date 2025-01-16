import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaChevronRight } from 'react-icons/fa';
import '../styles/about.css';

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`about-section ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="about-content">
        <div className="section-header fade-in">
          <span className="section-number">01</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-left fade-in">
            <div className="profile-container">
              <div className="profile-image">
                <img src="/nimmi.png" alt="Nimmi" />
                <div className="image-frame"></div>
                <div className="dot-pattern-small"></div>
              </div>
            </div>
          </div>

          <div className="about-right fade-in">
            <div className="about-content-text">
              <h3 className="about-subtitle">
                Full Stack Developer
              </h3>
              <p className="about-description">
                Originally from India, where I built my foundation in full-stack development 
                working on innovative projects, I recently embarked on an exciting journey 
                to Canada to pursue new opportunities and challenges in the tech industry.
              </p>
              <p className="about-description">
                With a strong background in both frontend and backend development, I bring 
                a unique perspective shaped by my experiences across different cultures and 
                tech ecosystems. My transition from India to Canada has enhanced my 
                adaptability and reinforced my passion for creating impactful solutions 
                that bridge cultural and technological gaps.
              </p>
            </div>

            <div className="specialization-list">
              <div className="specialization-item">
                <span className="specialization-title">Frontend Development</span>
                <p>Creating responsive and intuitive user interfaces with modern frameworks</p>
              </div>
              <div className="specialization-item">
                <span className="specialization-title">Backend Development</span>
                <p>Building robust and scalable server-side solutions with efficient APIs</p>
              </div>
              <div className="specialization-item">
                <span className="specialization-title">Cross-Cultural Collaboration</span>
                <p>Leveraging diverse perspectives to create inclusive and innovative solutions</p>
              </div>
            </div>

            <a href="#contact" className="connect-button">
              Let's Connect <FaChevronRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
