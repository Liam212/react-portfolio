import React from 'react';
import Styles from './Styles.module.scss'
import Navbar from '../NavBar'
import Link from 'react-router-dom/Link'
function Home() {
  return (
    <div>
        <Navbar />
        <div className={Styles.CardContainer}>
          <div className={Styles.LeftContainer}>
            <Link className={`${Styles.Card} ${Styles.cardRed}`} to="/about">
              <h2>About</h2>
            </Link>
            <Link className={`${Styles.Card} ${Styles.cardOrange}`} to="/work">
              <h2>Work</h2>
            </Link>
            <Link className={`${Styles.Card} ${Styles.cardPurple}`} to="/contact">
              <h2>Contact</h2>
            </Link>
          </div>
          <div className={Styles.RightContainer}>
            <a className={`${Styles.Card} ${Styles.cardBlue}`} href='https://github.com/liam212' target='_blank'>
              <h2>Github</h2>
            </a>
          </div>
        </div>
    </div>
  );
}

export default Home;
