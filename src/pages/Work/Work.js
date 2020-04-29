import React from 'react';
import Styles from '../PageStyles.module.scss'
import Navbar from '../NavBar'
import projects from './projects'
const logos = {
  react: require('../../assets/img/react.svg'),
  node: require('../../assets/img/node.png'),
  python: require('../../assets/img/python.png'),
  html: require('../../assets/img/html.png')
}
function Work() {
  return (
    <div>
        <Navbar />
        <div className={Styles.Container}>
          <h1 style={{ color: '#FFC59A' }}>my work</h1>
          {projects.projects.map((project) => {
            return ( 
              <div className={Styles.WorkCard}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}><h3>{project.name}</h3>{project.tech.map((url) => { return <img style={{ marginLeft: '.3em', paddingBottom: '.3em' }} src={logos[url]} alt={'Tech'} height={20} /> })}</div>
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
