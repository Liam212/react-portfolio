import React from 'react';
import Styles from '../PageStyles.module.scss'
import Navbar from '../NavBar'

function About() {
  return (
    <div>
        <Navbar />
        <div className={Styles.Container}>
          <h1 style={{ color: '#FF9A9A' }}>about me</h1>
        </div>
    </div>
  );
}

export default About;
