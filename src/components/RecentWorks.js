import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowLeft, FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/recentWorks.css';

const works = [
  {
    title: "Vision Board Creator",
    description: "An interactive web application that allows users to create and customize their personal vision boards. Features include drag-and-drop functionality, multiple layout options, and the ability to download or share created vision boards.",
    imageUrl: "/vision-board.png",
    tech: ["React", "Framer Motion", "Styled Components"],
    period: "2024",
    links: {
      live: "https://vision-board-creator.com",
      github: "https://github.com/nimmia/vision-board"
    }
  },
  {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website showcasing my work and skills. Features dark mode support, smooth animations, and an intuitive user interface that works seamlessly across all devices.",
    imageUrl: "/portfolio.png",
    tech: ["React", "Styled Components", "Framer Motion"],
    period: "2024",
    links: {
      live: "https://nimmi-alampatta.com",
      github: "https://github.com/nimmialampatt/portfolio"
    }
  },
  {
    title: "Resume Keyword Scanner",
    description: "A tool that helps job seekers optimize their resumes by analyzing keyword matches between their resume and job descriptions. Features include PDF parsing, keyword highlighting, and match percentage calculation.",
    imageUrl: "/resume-scanner.png",
    tech: ["React", "Node.js", "Natural Language Processing"],
    period: "2024",
    links: {
      live: "https://resume-keyword-scanner.com",
      github: "https://github.com/yourusername/resume-scanner"
    }
  }
];

const RecentWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % works.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + works.length) % works.length);
  };

  return (
    <div className="recent-works-page">
      <div className="dot-pattern"></div>
      <div ref={ref} className="recent-works-section">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Recent Works
        </motion.h2>

        <div className="slideshow-container">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.3 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="slide"
            >
              <div className="slide-content">
                <div className="slide-image">
                  <img 
                    src={works[currentIndex].imageUrl} 
                    alt={works[currentIndex].title}
                  />
                </div>
                <div className="slide-info">
                  <h3>{works[currentIndex].title}</h3>
                  <p>{works[currentIndex].description}</p>
                  <div className="tech-stack">
                    {works[currentIndex].tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={works[currentIndex].links.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> View Code
                    </a>
                    <a href={works[currentIndex].links.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                  <span className="period">{works[currentIndex].period}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button className="nav-button prev" onClick={() => paginate(-1)}>
            <FaArrowLeft />
          </button>
          <button className="nav-button next" onClick={() => paginate(1)}>
            <FaArrowRight />
          </button>

          <div className="slide-dots">
            {works.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWorks; 