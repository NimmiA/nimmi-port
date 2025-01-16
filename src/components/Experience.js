import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/experience.css';

const Experience = () => {
  const { isDarkMode } = useTheme();

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "SKYPAK TOURS INC.",
      duration: "2022 - Present",
      location: "India",
      description: [
        "Developed and maintained responsive web applications using React.js and Node.js",
        "Implemented RESTful APIs and integrated third-party services",
        "Optimized application performance and improved user experience",
        "Collaborated with cross-functional teams to deliver high-quality solutions"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "AWS"]
    },
    {
      role: "Frontend Developer",
      company: "Healthcare Solutions",
      duration: "2021 - 2022",
      location: "India",
      description: [
        "Built responsive user interfaces using modern JavaScript frameworks",
        "Implemented complex UI components and animations",
        "Collaborated with designers to ensure pixel-perfect implementation",
        "Improved application performance and accessibility"
      ],
      technologies: ["React", "TypeScript", "SASS", "Redux", "Material-UI"]
    }
  ];

  return (
    <section className={`experience-section ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="experience-content">
        <div className="section-header fade-in">
          <span className="section-number">03</span>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="experience-card fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="experience-header">
                <h3 className="role">{exp.role}</h3>
                <div className="company">{exp.company}</div>
              </div>

              <div className="experience-meta">
                <div className="meta-item">
                  <FaCalendar />
                  <span>{exp.duration}</span>
                </div>
                <div className="meta-item">
                  <FaMapMarkerAlt />
                  <span>{exp.location}</span>
                </div>
              </div>

              <ul className="experience-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="technologies">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 