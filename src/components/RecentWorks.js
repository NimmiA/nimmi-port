import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowLeft, FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/recentWorks.css';

const works = [
  {
    title: "Japan Airlines Loyalty Program",
    description: "Integrated loyalty points feature increasing user engagement by 35%. Implemented comprehensive reward tracking and redemption system.",
    imageUrl: "/images/project1.jpg",
    tech: ["React", "Redux", "Node.js"],
    period: "2022-2023",
    links: {
      live: "https://www.jal.com",
      github: "https://github.com/yourusername/jal-loyalty"
    }
  },
  {
    title: "SKYPAK TOURS Booking Platform",
    description: "Developed tour booking website enhancing efficiency by 50%. Built with modern web technologies for optimal performance.",
    imageUrl: "/images/project2.jpg",
    tech: ["Vue.js", "Express", "MongoDB"],
    period: "2022",
    links: {
      live: "https://skypak.com",
      github: "https://github.com/yourusername/skypak-tours"
    }
  },
  {
    title: "IKONICK E-commerce Platform",
    description: "Created headless e-commerce site boosting sales by 20%. Implemented seamless shopping experience with modern UI/UX.",
    imageUrl: "/images/project3.jpg",
    tech: ["React", "Shopify", "GraphQL"],
    period: "2021",
    links: {
      live: "https://ikonick.com",
      github: "https://github.com/yourusername/ikonick-ecommerce"
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
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
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
                opacity: { duration: 0.2 }
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
                      <FaGithub /> Code
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