import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

/**
 * Impliments Navbar component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Navbar
 */

export const Navbar = (props) => {
    return (
       <>
             <nav className={styles.navbar}>
      <div className={styles.brand}>Piyush</div>
      {/* <div className={styles.search}>
        <MyInput type="text" placeholder="Search" onChange={(e)=>e.target.value} className={styles.searchbox}/>
        <MyButton type="submit" btnText={<FaSearchengin />}  className={styles.btnsearch}/>
      </div> */}
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} activeClassName={styles.activeNavLink} exact to="/">Home</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} activeClassName={styles.activeNavLink} to="/login">Login</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} activeClassName={styles.activeNavLink} to="/signIn">Register</NavLink>
        </li>
      </ul>
    </nav>

       </>
    )
}

/**
 * Property type definations
 * 
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
    example: PropTypes.string
};

/**
 * Default values for Navbar
 * 
 * @type {object}
 * @property {string} example='Navbar 
 */

export const defaultProps = {
    example: 'Navbar'
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;