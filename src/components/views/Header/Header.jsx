import React, { useEffect ,useState} from "react";
import PropTypes from "prop-types";
import MyInput from "../MyInput/MyInput.jsx";
import classes from "./Header.module.css";
import { BsCart3 } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import styles from './Header.module.css'
import { useRecoilValue } from "recoil";
import { cartCount, userData } from "../../../Recoil/Recoil.js";

/**
 * Impliments Header component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Header
 */

export const Header = (props) => {
  const cardCount = useRecoilValue(cartCount)
  const data = useRecoilValue(userData)
  console.log('gjhklk.',data)
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
          src="https://play-lh.googleusercontent.com/EuiZnkT8aEKjXDLX74DTp1VRIwWaeRa8Dvo-LOGAxy1FPQ8GzABTIRenksiM-A7Oz48g"
          alt="Flipkart logo"
        />
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="Search for products, brands and more" />
        
      </div>
      <div className={styles.cart}>
        <span><h3>{cardCount}</h3></span>
      <h2>{data? data.name :'guest' }</h2>
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
