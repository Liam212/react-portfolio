import React from 'react';
import Styles from '../PageStyles.module.scss'
import Navbar from '../NavBar'

function Contact() {
  return (
    <div>
        <Navbar />
        <div className={Styles.Container}>
          <h1 style={{ color: '#BD9AFF' }}>contact me</h1>
          <h3>Email</h3>
          <a href="mailto:liamstout212@gmail.com">liamstout212@gmail.com</a>
          <h3>Github</h3>
          <a target="_blank" href="https://github.com/Liam212">Liam212</a>
          <h3>Linkedin</h3>
          <a target="_blank" href='https://www.linkedin.com/in/liam-stout-860070232/'>Linkedin</a>
        </div>
    </div>
  );
}

export default Contact;
