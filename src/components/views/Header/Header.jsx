import PropTypes from "prop-types";
import React from "react";
import styles from './Header.module.css';

/**
 * Impliments Header component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Header
 */

export const Header = (props) => {
  const cardCount = ''
  // useEffect(()=>{
  //   const userData = JSON.parse(localStorage.getItem('userDetails'))
  //   setUserInfo(userData)
  // },[])


  return (
    <>
      <header className={styles.header}>
        <div className={styles.menu}>
          <i className="fas fa-bars"></i>
        </div>
        <div className={styles.logo}>
          <img
            src="https://img.freepik.com/free-vector/open-service-available-24-hours-7-days-with-clock-sign_1017-42536.jpg?w=740&t=st=1677516929~exp=1677517529~hmac=65cafd05ca1500aad3b54595742d5ada962a8bb194d79abecf1af9be690c3443"
            alt="Flipkart logo"
          />
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Search for products, brands and more" />

        </div>
        <div className={styles.cart}>
          <span><h3>{cardCount}</h3></span>
          <h2></h2>
        </div>
      </header>
    </>
  );
};

/**
 * Property type definations
 *
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
  example: PropTypes.string,
};

/**
 * Default values for Header
 *
 * @type {object}
 * @property {string} example='Header
 */

export const defaultProps = {
  example: "Header",
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
