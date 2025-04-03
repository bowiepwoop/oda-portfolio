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
            <p className="whoami">elo~ im oda, 22 years old.</p>
            <pre className="ascii-art-container">{asciiArt}</pre>
          </div>

          <div className="skills-container">
            <div className="card-body">
              <h2 className="command-title">$ ls programming_languages</h2>
              <div className="skill">
                <span>JavaScript</span>
              </div>
            </div>

            <div className="card-body">
              <h2 className="command-title">$ ls -1 frontend</h2>
              <div className="skill">
                <span>React.js</span>
              </div>
              <div className="skill">
                <span>HTML</span>
              </div>
              <div className="skill">
                <span>CSS</span>
              </div>
            </div>

            <div className="card-body">
              <h2 className="command-title">$ ls -1 backend</h2>
              <div className="skill">
                <span>Node.js</span>
              </div>
              <div className="skill">
                <span>Express.js</span>
              </div>
            </div>

            <div className="card-body">
              <h2 className="command-title">$ ls -1 tools</h2>
              <div className="skill">
                <span>React</span>
              </div>
              <div className="skill">
                <span>Next.js</span>
              </div>
              <div className="skill">
                <span>Bootstrap</span>
              </div>
              <div className="skill">
                <span>Tailwind CSS</span>
              </div>
            </div>

            <div className="card-body">
              <h2 className="command-title">$ ls -1 version_control</h2>
              <div className="skill">
                <span>Git</span>
              </div>
              <div className="skill">
                <span>GitHub</span>
              </div>
            </div>

            <div className="card-body">
              <h2 className="command-title">$ ls -1 ui-ux</h2>
              <div className="skill">
                <span>figma</span>
              </div>
            </div>

            <div className="card-body">
              <h2 className="command-title">$ ls -1 certification</h2>
              <div className="skill">
                <span>freecodecamp</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;