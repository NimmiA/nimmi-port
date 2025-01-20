import React ,{useState} from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/contact.css';
import emailjs from 'emailjs-com';
import API from "../utils/emailkey"


const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State for success/error messages
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => 
{
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit=(e)=>{

    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    emailjs.sendForm(API.SERVICE_ID,API.TEMPLATE_ID, e.target, API.USER_ID)
.then((result) => {
setStatus("Message Sent, We will get back to you shortly");

},
(error) => {
alert("An error occurred, Please try again", error.text);

});
  }

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
                <span>nimmialampatta@gmail.com</span>
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
          <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your Email"
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="subject"
          value={formData.subject}
          placeholder="Subject"
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          value={formData.message}
          placeholder="Your Message"
          rows="6"
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="submit-btn">
        Send Message
      </button>
      {status && <p className="status-message">{status}</p>}
    </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
