import React from 'react';
import Styles from '../PageStyles.module.scss'
import Navbar from '../NavBar'
import projects from './projects'

function Work() {
  return (
    <div>
        <Navbar />
        <div className={Styles.Container}>
          <h1 style={{ color: '#FFC59A' }}>my work</h1>
          {projects.projects.map((project) => {
            return ( 
              <div className={Styles.WorkCard}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className={Styles.WorkCardButtons}>
                  {project.live ? <a target="_blank" href={project.live}>Live Version</a> : <></>}
                  {project.source ? <a target="_blank" href={project.source}>Source Code</a> : <></>}
                </div>
              </div>
            )
          })}
        </div>                
    </div>
  );
}

export default Work;
