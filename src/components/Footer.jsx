import React, { useState, useEffect } from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    // Check if we have a start time in localStorage
    const startTime = localStorage.getItem('siteVisitStart') || Date.now().toString();
    
    // Set the start time if it's not already set
    if (!localStorage.getItem('siteVisitStart')) {
      localStorage.setItem('siteVisitStart', startTime);
    }

    // Update uptime every second
    const timer = setInterval(() => {
      const uptimeSeconds = Math.floor((Date.now() - parseInt(startTime)) / 1000);
      setUptime(uptimeSeconds);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format uptime based on duration
  const formatUptime = (seconds) => {
    if (seconds < 60) {
      return `${seconds}s`;
    } else {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes}m ${secs}s`;
    }
  };

  return (
    <footer className="cyber-footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="status-label">status: </span>
          <span className="status-text">online</span>
        </div>
        <div className="footer-center">
          <span className="line" style={{ letterSpacing: '0.5em' }}>&copy; {currentYear} oda</span>
          <span className="separator">|</span>
          <span>v1.0.0</span>
        </div>
        <div className="footer-right">
          <span className="uptime-text">uptime: {formatUptime(uptime)}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;