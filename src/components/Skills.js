import React from 'react';
import '../styles/skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Specializing in modern frontend frameworks and responsive design",
      skills: [
        { 
          name: "React.js", 
          level: 90,
          details: "Redux, Hooks, Context API, Next.js, Performance Optimization"
        },
        { 
          name: "Vue.js", 
          level: 85,
          details: "Vue 3, Composition API, Vuex, Nuxt.js"
        },
        { 
          name: "JavaScript (ES6+)", 
          level: 95,
          details: "Async/Await, Promises, TypeScript, Modern ES features"
        },
        { 
          name: "HTML5/CSS3", 
          level: 90,
          details: "Semantic HTML, Flexbox, Grid, SASS/SCSS, Animations"
        },
        { 
          name: "UI/UX Design", 
          level: 85,
          details: "Responsive Design, Material-UI, Tailwind CSS, Bootstrap"
        }
      ]
    },
    {
      title: "Backend Development",
      description: "Building scalable server-side applications and APIs",
      skills: [
        { 
          name: "Node.js", 
          level: 85,
          details: "Express.js, REST APIs, Middleware, Authentication"
        },
        { 
          name: "Database Management", 
          level: 80,
          details: "MongoDB, MySQL, PostgreSQL, Redis"
        },
        { 
          name: "API Development", 
          level: 85,
          details: "RESTful APIs, GraphQL, WebSockets, API Security"
        },
        { 
          name: "Cloud Services", 
          level: 75,
          details: "AWS (Lambda, S3, EC2), Firebase, Heroku"
        },
        { 
          name: "Server Management", 
          level: 70,
          details: "Nginx, PM2, Docker, CI/CD Pipelines"
        }
      ]
    },
    {
      title: "Tools & Technologies",
      description: "Proficient in modern development tools and practices",
      skills: [
        { 
          name: "Version Control", 
          level: 90,
          details: "Git, GitHub, GitLab, Branching Strategies"
        },
        { 
          name: "Development Tools", 
          level: 85,
          details: "VS Code, WebStorm, Chrome DevTools, Postman"
        },
        { 
          name: "Testing", 
          level: 80,
          details: "Jest, React Testing Library, Cypress, Unit Testing"
        },
        { 
          name: "Build Tools", 
          level: 85,
          details: "Webpack, Babel, npm, yarn, Vite"
        },
        { 
          name: "Project Management", 
          level: 80,
          details: "Agile, Scrum, Jira, Trello"
        }
      ]
    }
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="section-title animate-slide-down">Technical Skills</h2>
        <p className="section-description animate-fade-in">
          A comprehensive overview of my technical expertise and proficiency levels
          in various technologies and tools.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="skill-category animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="skill-details">
                      {skill.details}
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
