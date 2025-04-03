import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Terminal from './components/Terminal';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="crt-screen"></div>
      <div className="scanline"></div>
      <div className="app-background">
        {loading ? (
          <div className="loading-screen crt">
            <Terminal isLoading={true} />
          </div>
        ) : (
          <Router>
            <div className="centered-container">
              <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/connect" element={<Connect />} />
                </Routes>
             
              <Footer />
            </div>
          </Router>
        )}
      </div>
    </>
  );
}

export default App;