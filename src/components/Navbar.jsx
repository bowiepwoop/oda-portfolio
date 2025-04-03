import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const location = useLocation();
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <nav className="cyber-navbar crt">
      <div className="container-fluid">
        <div className="cyber-brand">&#62;&#95;&#60;/&#62;_</div>
        <div className="nav-links">
          <Link 
            to="/" 
            className={`cyber-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            {location.pathname === '/' ? '>' : ''} home
          </Link>
          <Link 
            to="/about" 
            className={`cyber-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            {location.pathname === '/about' ? '>' : ''} about
          </Link>
          <Link 
            to="/projects" 
            className={`cyber-link ${location.pathname === '/projects' ? 'active' : ''}`}
          >
            {location.pathname === '/projects' ? '>' : ''} projects
          </Link>
          <Link 
            to="/connect" 
            className={`cyber-link ${location.pathname === '/connect' ? 'active' : ''}`}
          >
            {location.pathname === '/connect' ? '>' : ''} connect
          </Link>
        </div>
        <div className="time-display">{currentTime}</div>
      </div>
    </nav>
  );
}

export default Navbar;