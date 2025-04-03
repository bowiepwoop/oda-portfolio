import React from 'react';
import MatrixRain from './MatrixRain';

function Home() {
  return (
    <div className="content-container">
      <div className="scrollable-content home-content">
        <MatrixRain />
        <section id="home" className="home-content-section">
          <div className="home-centered">
            <div className="glitch-header">
              <h1 className="home-title">$ my portfolio</h1>
            </div>
            <div className="home-text">
              <p className="line" style={{ letterSpacing: '0.5em' }}>Welcome to the digital void!</p>
              <p>under construction hihi~ </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;