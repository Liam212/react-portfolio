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
            <p>Hi, my name is Liam. I'm a Front-End Developer with a passion huge passion in creating effective user-friendly interfaces. I am learning new things every day while creating projects and opportunity. I will be updating my portfolio with new work as I move forward. I have developed my skills in HTML, CSS, and JavaScript to a high level. I also have knowledge of PHP and SQL. This can be seen in my example work below. Every day I am developing my existing skills further along with learning new things.</p>
          </div>
        </div>
    </div>
  );
}

export default About;
