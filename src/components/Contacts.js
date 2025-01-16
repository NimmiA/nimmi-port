import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/contact.css';

const Contact = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`contact-section ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="dot-pattern"></div>  {/* Add this line */}

      <div className="contact-container">
        <div className="section-header fade-in">
          <span className="section-number">03</span>
          <h2 className="section-title">GET IN TOUCH</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p className="contact-description">
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, I'll get back to you!
            </p>
            
            <div className="contact-links">
              <a href="mailto:your.email@example.com" className="contact-link">
                <FaEnvelope />
                <span>your.email@example.com</span>
              </a>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FaLinkedin />
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FaGithub />
                <span>GitHub Profile</span>
              </a>
              <div className="contact-link">
                <FaMapMarkerAlt />
                <span>Toronto, Canada</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="6" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
