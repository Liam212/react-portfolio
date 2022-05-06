import React from 'react';
import Styles from '../PageStyles.module.scss'
import Navbar from '../NavBar'

function About() {
  return (
    <div>
        <Navbar />
        <div className={Styles.Container}>
          <h1 style={{ color: '#FF9A9A', marginBottom: '0' }}>about me</h1>
          <div className={Styles.Body}>
            <p>Hi, my name is Liam.</p>
          </div>
        </div>
    </div>
  );
}

export default About;
