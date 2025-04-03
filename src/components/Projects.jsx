import React from 'react';

function Projects() {
  return (
    <div className="content-container">
      <div className="scrollable-content">
        <section id="projects" className="content-section">
          <h2 className="section-title">$ ls -1 projects</h2>
          <div className="projects-grid">
            <div className="cyber-project">
              <div className="project-header">PROJECT_01</div>
              <div className="project-body">
                {/* 
                <p>PROJECT TITLE</p> 
                */}
                <p>under construction hihi~</p>
                <div className="project-tech">
                    {/* react //  // WEBGL */}
                </div>
              </div>
              <div className="project-footer">
                {/* 
                <button className="cyber-btn">VIEW_CODE</button>
                <button className="cyber-btn">DEMO</button>
                */}
              </div>
            </div>
            
            {/* ...other projects... */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;