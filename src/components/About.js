import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/about.css';

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`about-section ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="about-container">
        <h1 className="about-title">ABOUT ME</h1>
        <div className="about-content">
          <div className="about-image-container">
            <div className="image-wrapper">
              <img src="/nimmi.jpeg" alt="Nimmi" className="about-image" />
              <div className="image-glow"></div>
            </div>
            <div className="decorative-text">FULL STACK DEVELOPER</div>
          </div>
          
          <div className="about-text-content">
            <div className="tagline-container">
              <p className="tagline">HANDCRAFTED CODE</p>
              <p className="tagline">MODERN SOLUTIONS</p>
            </div>
            
            <div className="description-blocks">
              <div className="description-block">
                <h3 className="block-title">WHO I AM</h3>
                <p className="block-text">
                  A passionate Full Stack Developer with a love for creating beautiful 
                  and functional web applications. I blend creativity with technical expertise 
                  to build modern digital experiences.
                </p>
              </div>

              <div className="description-block">
                <h3 className="block-title">WHAT I DO</h3>
                <p className="block-text">
                  I specialize in building full-stack applications using modern technologies.
                  From responsive front-end designs to robust back-end systems, I create
                  seamless digital solutions that solve real-world problems.
                </p>
              </div>

              <div className="description-block">
                <h3 className="block-title">MY APPROACH</h3>
                <p className="block-text">
                  I believe in writing clean, maintainable code and creating intuitive user 
                  experiences. Every project is an opportunity to innovate and push the 
                  boundaries of what's possible in web development.
                </p>
              </div>
            </div>

            <div className="cta-container">
              <a href="/projects" className="cta-btn primary">View My Work</a>
              <a href="/contact" className="cta-btn secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
