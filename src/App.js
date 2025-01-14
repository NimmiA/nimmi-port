import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contacts";
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import "./App.css";

function AppContent() {
  const { isDarkMode } = useTheme();
  
  useEffect(() => {
    // Apply theme to document element
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    // Also add a class to body for additional theme control
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
            </>
          } />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
