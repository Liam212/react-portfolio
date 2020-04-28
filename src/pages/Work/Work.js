import React from 'react';
import Styles from '../PageStyles.module.scss'
import Navbar from '../NavBar'

function Work() {
  return (
    <div>
        <Navbar />
        <div className={Styles.Container}>
          <h1 style={{ color: '#FFC59A' }}>my work</h1>
        </div>
    </div>
  );
}

export default Work;
