import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaPlane, FaHospital, FaRobot, FaGlobe, FaCode } from 'react-icons/fa';
import '../styles/projects.css';

const Projects = () => {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      company: "SKYPAK TOURS INC.",
      logo: "/company-logos/skypak.png",
      icon: <FaPlane className="project-icon" />,
      projects: [
        {
          title: "Tour Booking Platform",
          description: "A comprehensive tour booking platform with an intuitive interface.",
          details: "Developed a website where users can book tour packages by entering departure and return dates, passenger count, and destination. Enhanced booking efficiency by 50% through the development of a tour booking application.",
          tech: ["React", "Redux", "Redux-Saga", "JavaScript", "CSS"],
          role: "Lead Frontend Developer",
          duration: "6 months"
        }
      ]
    },
    {
      company: "JAPAN AIRLINES INC.",
      logo: "/company-logos/jal.png",
      icon: <FaPlane className="project-icon" />,
      projects: [
        {
          title: "JAL-KOMADO",
          description: "Loyalty points calculation system for Japan Airlines.",
          details: "Developed an embedded feature for Japan Airlines to calculate loyalty points for travelers, resulting in a 35% increase in user engagement.",
          tech: ["React", "Redux-Saga", "JavaScript", "CSS"],
          role: "Frontend Developer",
          duration: "8 months"
        }
      ]
    },
    {
      company: "IKONICK INC.",
      logo: "/company-logos/ikonick.png",
      icon: <FaGlobe className="project-icon" />,
      projects: [
        {
          title: "E-commerce Platform",
          description: "Headless e-commerce platform with enhanced SEO capabilities.",
          details: "Created a headless e-commerce site, boosting sales conversions by 20%. Improved SEO using modern web technologies.",
          tech: ["Vue.js", "Nuxt.js", "JavaScript", "SCSS", "Contentful", "Vercel"],
          role: "Full Stack Developer",
          duration: "1 year"
        }
      ]
    },
    {
      company: "HEALTHCARE SOLUTIONS INC.",
      logo: "/company-logos/healthcare.png",
      icon: <FaHospital className="project-icon" />,
      projects: [
        {
          title: "LUNG STORY",
          description: "Healthcare platform for respiratory symptom management.",
          details: "Built an online platform for chronic respiratory symptom management, increasing user engagement by 25%. Integrated React forms with Redux store.",
          tech: ["React", "Redux", "JavaScript/ES6", "PHP", "SCSS"],
          role: "Senior Frontend Developer",
          duration: "9 months"
        },
        {
          title: "FUEL FLEET",
          description: "Health metrics tracking application using smartwatch data.",
          details: "Developed an application to track health metrics using smartwatch data, enhancing tracking accuracy by 40%.",
          tech: ["Node.js", "GraphQL", "React", "AWS Lambda", "DynamoDB"],
          role: "Full Stack Developer",
          duration: "6 months"
        }
      ]
    },
    {
      company: "AI SOLUTIONS INC.",
      logo: "/company-logos/ai.png",
      icon: <FaRobot className="project-icon" />,
      projects: [
        {
          title: "SPACETIME",
          description: "AI-powered solutions platform using IBM Watson.",
          details: "Created an AI-based website using IBM Watson AI APIs and Node.js, boosting customer adoption by 25%.",
          tech: ["React.js", "Redux", "Node.js", "IBM Watson", "MongoDB"],
          role: "Backend Developer",
          duration: "1 year"
        }
      ]
    }
  ];

  return (
    <section className={`projects-section ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="projects-container">
        <h1 className="section-title animate-title">
          <span>P</span><span>R</span><span>O</span><span>J</span><span>E</span>
          <span>C</span><span>T</span><span>S</span>
        </h1>
        
        <p className="section-description">
          A showcase of my professional work and contributions to various companies
        </p>

        <div className="companies-grid">
          {projects.map((company, index) => (
            <div 
              key={index} 
              className="company-section animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="company-header">
                <div className="company-icon-wrapper">
                  {company.icon}
                </div>
                <h2 className="company-name">{company.company}</h2>
              </div>

              <div className="company-projects">
                {company.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="project-card">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-meta">
                        <span className="role">{project.role}</span>
                        <span className="duration">{project.duration}</span>
                      </div>
                    </div>

                    <p className="project-description">{project.description}</p>
                    <p className="project-details">{project.details}</p>

                    <div className="tech-stack">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
