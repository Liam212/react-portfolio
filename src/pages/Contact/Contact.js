import React from 'react';
import Styles from '../PageStyles.module.scss'
import Navbar from '../NavBar'

function Contact() {
  return (
    <div>
        <Navbar />
        <div className={Styles.Container}>
          <h1 style={{ color: '#BD9AFF' }}>contact me</h1>
        </div>
    </div>
  );
}

export default Contact;
