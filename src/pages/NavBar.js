import React from 'react';
import Styles from './Styles.module.scss'
import { NavLink } from 'react-router-dom';

function Navbar() {
  const dropMenu = () => {
    const el = document.getElementById('draw')
    el.style.display = el.style.display === 'block' ? 'none' : 'block'
  }
  return (
    <div className={Styles.navContainer}>
        <NavLink className={Styles.navTitle} to='/'>
            <h1>Liam Stout</h1>
        </NavLink>
        <div className={Styles.navLinks}>
            <div className={Styles.navItem}>
                <NavLink exact to="/" activeClassName={Styles.activeItem}>
                    <h3>Home</h3>  
                </NavLink>
            </div>
            <div className={Styles.navItem}>
                <NavLink exact to="/about" activeClassName={Styles.activeItem}>
                    <h3>About</h3>  
                </NavLink>
            </div>
            <div className={Styles.navItem}>
                <NavLink exact to="/work" activeClassName={Styles.activeItem}>
                    <h3>Work</h3>  
                </NavLink>
            </div>
            <div className={Styles.navItem}>
                <NavLink exact to="/contact" activeClassName={Styles.activeItem}>
                    <h3>Contact</h3>  
                </NavLink>
            </div>
        </div>
        <div className={Styles.mobileNavLinks}>
            <a href="#" className={Styles.Menu} onClick={() => dropMenu()}><span>≡</span></a>
            <div className={Styles.Drawer} style={{ display: 'none' }} id='draw'>
                <div className={Styles.drawItem}>
                    <NavLink exact to="/" activeClassName={Styles.activeItem}>
                        <h3>Home</h3>  
                    </NavLink>
                </div>
                <div className={Styles.drawItem}>
                    <NavLink exact to="/about" activeClassName={Styles.activeItem}>
                        <h3>About</h3>  
                    </NavLink>
                </div>
                <div className={Styles.drawItem}>
                    <NavLink exact to="/work" activeClassName={Styles.activeItem}>
                        <h3>Work</h3>  
                    </NavLink>
                </div>
                <div className={Styles.drawItem}>
                    <NavLink exact to="/contact" activeClassName={Styles.activeItem}>
                        <h3>Contact</h3>  
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
