import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaCode, FaServer, FaDatabase, FaPalette, FaTools, FaCloud } from 'react-icons/fa';
import '../styles/skills.css';

const Skills = () => {
  const { isDarkMode } = useTheme();

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      description: "Crafting responsive and intuitive user interfaces with modern frameworks",
      skills: [
        { name: "React.js", proficiency: 90, details: "Redux, Hooks, Context API, Material-UI, Styled Components" },
        { name: "JavaScript (ES6+)", proficiency: 85, details: "Async/Await, Promises, DOM Manipulation, Web APIs" },
        { name: "HTML5 & CSS3", proficiency: 90, details: "Flexbox, Grid, SASS/SCSS, CSS Modules, Animations" },
        { name: "Vue.js", proficiency: 80, details: "Vuex, Vue Router, Vue CLI, Composition API" },
        { name: "TypeScript", proficiency: 85, details: "Types, Interfaces, Generics, Decorators" },
        { name: "Next.js", proficiency: 80, details: "SSR, Static Generation, API Routes, Image Optimization" }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      description: "Building robust and scalable server-side applications with modern architectures",
      skills: [
        { name: "Node.js", proficiency: 85, details: "Express, Middleware, RESTful APIs, WebSocket" },
        { name: "Express.js", proficiency: 85, details: "JWT Auth, OAuth, Passport.js, Middleware Chains" },
        { name: "Python", proficiency: 80, details: "Django, Flask, FastAPI, SQLAlchemy, Pandas" },
        { name: "RESTful APIs", proficiency: 90, details: "OpenAPI/Swagger, Rate Limiting, Caching Strategies" },
        { name: "GraphQL", proficiency: 75, details: "Apollo Server, Type Definitions, Resolvers, Mutations" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <FaDatabase />,
      description: "Managing data and deploying scalable cloud solutions",
      skills: [
        { name: "MongoDB", proficiency: 85, details: "Aggregation, Indexing, Atlas, Mongoose ODM" },
        { name: "PostgreSQL", proficiency: 80, details: "Query Optimization, PL/pgSQL, Triggers, Views" },
        { name: "MySQL", proficiency: 85, details: "Stored Procedures, Triggers, Indexing, Replication" },
        { name: "Firebase", proficiency: 80, details: "Realtime DB, Auth, Cloud Functions, Hosting" },
        { name: "AWS", proficiency: 75, details: "S3, Lambda, EC2, CloudFront, Route 53, RDS" }
      ]
    },
    {
      title: "Development Tools",
      icon: <FaTools />,
      description: "Utilizing modern tools and practices for efficient development workflow",
      skills: [
        { name: "Git & GitHub", proficiency: 90, details: "Version Control, CI/CD, Actions, Branch Strategy" },
        { name: "Docker", proficiency: 75, details: "Containerization, Docker Compose, Kubernetes basics" },
        { name: "Testing", proficiency: 85, details: "Jest, React Testing Library, Cypress, Mocha" },
        { name: "Build Tools", proficiency: 80, details: "Webpack, Babel, Vite, ESLint, Prettier" },
        { name: "DevOps", proficiency: 75, details: "Jenkins, GitHub Actions, Travis CI, Netlify" }
      ]
    }
  ];

  return (
    <section className={`skills-section ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="skills-content">
        <div className="section-header fade-in">
          <span className="section-number">02</span>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-category fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <div className="category-info">
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                </div>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item"
                    style={{ animationDelay: `${(index * 5 + skillIndex) * 0.1}s` }}
                  >
                    <div className="skill-info">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.proficiency}%</span>
                      </div>
                      <span className="skill-details">{skill.details}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
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

export default Skills;
