import React, { useEffect ,useState} from "react";
import PropTypes from "prop-types";
import MyInput from "../MyInput/MyInput.jsx";
import classes from "./Header.module.css";
import { BsCart3 } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";

/**
 * Impliments Header component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Header
 */

export const Header = (props) => {
  const [userInfo, setUserInfo] = useState()
  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem('userDetails'))
    setUserInfo(userData)
  },[])
   console.log(userInfo)
  return (
    <div className={classes.container}>
      <div><h3>{userInfo? userInfo.email :'guest' }</h3> </div>
      <div className={classes.searchBar_div}>
        <MyInput placeholder="Search for item" className={classes.inpute} />
        
      </div>
      <div className={classes.iconcontainer}>  
      <VscAccount />
      <BsHeart />
      <BsCart3 />
      </div>
     
      
    </div>
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
