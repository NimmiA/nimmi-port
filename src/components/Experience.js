import React from 'react';
import '../styles/experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Lead Solution Engineer",
      company: "IBS Software Services",
      location: "Montreal, Québec",
      period: "Jan 2022 - Present",
      description: [
        "Designed and implemented software solutions with high code quality and efficient data structures.",
        "Worked on tasks individually and through pair programming, contributing to a multi-disciplinary team.",
        "Conducted code reviews, issue triage, and design meetings, providing valuable input and feedback.",
        "Managed the entire lifecycle of assigned Jiras, including requirement analysis, effort estimation, and risk control.",
        "Presented solutions (POC) to PMs, BAs, peers, and business users."
      ],
      projects: [
        {
          name: "SKYPAK TOURS",
          details: "Developed a website where users can book tour packages by entering departure and return dates, passenger count, and destination using technologies such as React-Redux, Redux-Saga, JavaScript, and CSS. Enhanced booking efficiency by 50% through the development of a tour booking application."
        },
        {
          name: "JAL-KOMADO",
          details: "Developed an embedded feature for Japan Airlines to calculate loyalty points for travelers using React, Redux-Saga, JavaScript, and CSS, resulting in a 35% increase in user engagement."
        }
      ]
    },
    {
      title: "Junior Associate",
      company: "White Rabbit Group Inc.",
      location: "Kochi, India",
      period: "Jul 2020 - Jan 2022",
      description: [
        "Constructed a web UI interface using React JS to obtain survey results from users, increasing survey completion rates by 40%.",
        "Leveraged Vue-Nuxt JS and Gatsby JS for server-side rendering, enhancing website's SEO.",
        "Integrated third-party applications like Contentful and Shopify, improving data handling efficiency by 45%.",
        "Modernized HTML codebase to a single-page application using React and Redux, reducing load times by 50%."
      ],
      projects: [
        {
          name: "IKONICK",
          details: "Created a headless e-commerce site, boosting sales conversions by 20%. Improved SEO using Vue.js, Nuxt.js, Vue 3, JavaScript, CSS, SCSS, styled components, Nacelle, Vercel, and Contentful."
        },
        {
          name: "LUNG STORY",
          details: "Built an online platform for chronic respiratory symptom management, increasing user engagement by 25%. Integrated React forms with Redux store using React, Redux, JavaScript/ES6, CSS, SCSS, and PHP."
        },
        {
          name: "FUEL FLEET",
          details: "Developed a health metrics tracking application using AWS Lambda, GraphQL, and DynamoDB, enhancing tracking accuracy by 40%. Technologies: Node.js, JavaScript, GraphQL, React."
        }
      ]
    },
    {
      title: "Software Engineer",
      company: "Cubet Technolabs Pvt. Ltd",
      location: "Kochi, India",
      period: "Jan 2018 - Jul 2020",
      description: [
        "Led team to develop IBM Watson services demo website, increasing client interest by 30%.",
        "Built chat bots and e-commerce sites with IBM WATSON AI APIs.",
        "Designed REST APIs using Node-expressJS and MongoDB.",
        "Implemented Lambda functions for AWS cloud operations and GraphQL queries.",
        "Developed administrative control panel with React.js, improving efficiency by 45%."
      ],
      projects: [
        {
          name: "SPACETIME",
          details: "Created an AI-based website using IBM Watson AI APIs and Node.js, boosting customer adoption by 25%. Technologies: React.js, Redux, Node.js, IBM Watson, MongoDB, REST APIs."
        },
        {
          name: "UPFRONT",
          details: "Developed a product management system using MongoDB and LoopBack, streamlining operations by 20%. Technologies: LoopBack, Node.js, JavaScript, MongoDB, Angular."
        },
        {
          name: "ALISKART",
          details: "Built an e-commerce site with IBM Watson, WordPress and NodeJS, increasing sales by 10%."
        }
      ]
    }
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">
        <h2 className="section-title animate-slide-down">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`timeline-item animate-fade-in ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>

                <ul className="responsibilities">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="projects-section">
                  <h4>Key Projects</h4>
                  {exp.projects.map((project, i) => (
                    <div key={i} className="project-item">
                      <h5>{project.name}</h5>
                      <p>{project.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 