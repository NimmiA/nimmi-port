import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/contact.css';

const Contact = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`contact-section ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="contact-container">
        <h1 className="contact-title animate-title">
          <span>G</span><span>E</span><span>T</span>
          <span className="space"></span>
          <span>I</span><span>N</span>
          <span className="space"></span>
          <span>T</span><span>O</span><span>U</span><span>C</span><span>H</span>
        </h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-block">
              <h2 className="info-title">LET'S CONNECT</h2>
              <p className="info-text">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
              
              <div className="contact-details">
                <a href="mailto:your.email@example.com" className="contact-item">
                  <FaEnvelope className="icon" />
                  <span>your.email@example.com</span>
                </a>
                <a href="tel:+1234567890" className="contact-item">
                  <FaPhone className="icon" />
                  <span>+1 234 567 890</span>
                </a>
                <a href="https://linkedin.com/in/yourprofile" className="contact-item">
                  <FaLinkedin className="icon" />
                  <span>LinkedIn Profile</span>
                </a>
                <a href="https://github.com/yourusername" className="contact-item">
                  <FaGithub className="icon" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="YOUR NAME" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="YOUR EMAIL" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="SUBJECT" required />
              </div>
              <div className="form-group">
                <textarea placeholder="YOUR MESSAGE" rows="6" required></textarea>
              </div>
              <button type="submit" className="submit-btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
