import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBuilding, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your email sending logic
    window.location.href = `mailto:nimmialampatta@gmail.com?subject=Portfolio Contact&body=From: ${email}%0D%0A%0D%0A${message}`;
    setSubmitted(true);
    setEmail('');
    setMessage('');
  };

  const workHistory = [
    {
      role: "Lead Solution Engineer",
      company: "IBS Software Services",
      period: "Jan 2022 – Nov 2023",
      location: "Montreal, Québec"
    },
    {
      role: "Junior Associate",
      company: "White Rabbit Group Inc.",
      period: "Jul 2020 - Jan 2022",
      location: "Kochi, India"
    },
    {
      role: "Software Engineer",
      company: "Cubet Technolabs Pvt. Ltd",
      period: "Jan 2018 - Jul 2020",
      location: "Kochi, India"
    }
  ];

  const socialLinks = [
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:nimmialampatta@gmail.com',
      title: 'Email',
      description: 'nimmialampatta@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/nimmi-alampatta',
      title: 'LinkedIn',
      description: 'Connect with me'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/nimmialampatt',
      title: 'GitHub',
      description: 'Check out my code'
    }
  ];

  return (
    <div className="contact-page">
      <div className="dot-pattern"></div>
      <motion.div 
        ref={ref}
        className="contact-section"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        
        <div className="work-history">
          <h3>Work Experience</h3>
          {workHistory.map((job, index) => (
            <motion.div 
              key={index} 
              className="work-item hover-lift"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <FaBuilding className="icon" />
              <div className="work-details">
                <h4>{job.role}</h4>
                <p>{job.company}</p>
                <span>{job.period}</span>
                <span className="location">{job.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="contact-content">
          <div className="connect-section">
            <h3>Connect With Me</h3>
            <p className="contact-description">
              I'm currently available for freelance work and full-time positions. 
              Let's discuss how I can contribute to your team or project.
            </p>
            
            <div className="contact-methods">
              <div className="social-links">
                <a href="mailto:nimmialampatta@gmail.com" className="contact-item">
                  <FaEnvelope className="icon" />
                  <div>
                    <h4>Email</h4>
                    <span>nimmialampatta@gmail.com</span>
                  </div>
                </a>
                
                <a href="https://linkedin.com/in/nimmi-alampatta" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <FaLinkedin className="icon" />
                  <div>
                    <h4>LinkedIn</h4>
                    <span>Connect with me</span>
                  </div>
                </a>
                
                <a href="https://github.com/nimmialampatt" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <FaGithub className="icon" />
                  <div>
                    <h4>GitHub</h4>
                    <span>Check out my code</span>
                  </div>
                </a>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message (Optional)</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message here..."
                    rows="4"
                  />
                </div>
                <button type="submit" className="submit-btn pulse">
                  Send Message
                </button>
                {submitted && (
                  <p className="success-message">Thanks! I'll get back to you soon.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact; 