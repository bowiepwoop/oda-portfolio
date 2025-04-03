import React, { useState } from 'react';

function Connect() {
  const [connections, setConnections] = useState({
    github: false,
    x: false,
    instagram: false
  });

  const handleConnection = (platform, event) => {
    setConnections(prev => ({
      ...prev,
      [platform]: true
    }));
  };

  return (
    <div className="content-container">
      <div className="scrollable-content">
        <section id="contact" className="content-section">
          <h2 className="section-title">$ establish_connection</h2>
          <div className="contact-links">
            <div className="connection-block">
              <div className="connection-command">
                <span className="contact-label">attempting connection to . . .</span>
                <a 
                  href='https://github.com/bowiepwoop' 
                  className="social-link"
                  onClick={() => handleConnection('github')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </div>
              {connections.github && (
                <div className="connection-response">
                  <span className="success-message">connection established!</span>
                </div>
              )}
            </div>

            <div className="connection-block">
              <div className="connection-command">
                <span className="contact-label">attempting connection to . . .</span>
                <a 
                  href='https://twitter.com/bowiepwoop' 
                  className="social-link"
                  onClick={() => handleConnection('x')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  twitter
                </a>
              </div>
              {connections.x && (
                <div className="connection-response">
                  <span className="success-message">connection established!</span>
                </div>
              )}
            </div>

            <div className="connection-block">
              <div className="connection-command">
                <span className="contact-label">attempting connection to . . .</span>
                <a 
                  href='https://instagram.com/bowiepwoop' 
                  className="social-link"
                  onClick={() => handleConnection('instagram')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  instagram
                </a>
              </div>
              {connections.instagram && (
                <div className="connection-response">
                  <span className="success-message">connection established!</span>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Connect;