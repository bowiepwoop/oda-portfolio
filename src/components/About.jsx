import React, { useEffect, useState } from 'react';

function About() {
  const [asciiArt, setAsciiArt] = useState('');

  useEffect(() => {
    fetch('/img/ascii-art.txt')
      .then(response => response.text())
      .then(text => {
        const cleanText = text.replace(/\/\/ filepath:.*\n/, '');
        setAsciiArt(cleanText);
      })
      .catch(error => console.error('Error loading ASCII art:', error));
  }, []);
  
  return (
    <div className="content-container">
      <div className="scrollable-content">
        <section id="about" className="content-section">
          <div className="about-header">
            <h2 className="section-title">$ whoami</h2>
            <p className="whoami">user: oda</p>
            <p className="whoami">[ACCESS GRANTED]</p>
            <pre className="ascii-art-container">{asciiArt}</pre>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;