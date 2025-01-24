import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import Footer from './components/Footer';
import './styles/animations.css';
import RecentWorks from './components/RecentWorks';

// Create a component to handle scrolling
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <ScrollHandler />
          <Navbar />
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={
                <>
                  <section id="home" className="section-no-gap">
                    <Home />
                  </section>
                  <section id="recent-works" className="section-no-gap">
                    <RecentWorks />
                  </section>
                  <section id="contact" className="section-no-gap">
                    <Contact />
                  </section>
                </>
              } />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
