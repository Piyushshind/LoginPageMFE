import React from 'react'
import PropTypes from 'prop-types'
import classes from './HomePage.module.css';
import ProductCard from 'HomePageMFE/ProductCard';
import Hero from '../Hero/Hero';
import Vertical from '../Vertical/Vertical';
import { productData } from '../../../Constdata/mockdata'


/**
 * Impliments HomePage component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns HomePage
 */

export const HomePage = (props) => {

    return (

        <div className={classes.container}>
           <img
            src="https://img.freepik.com/free-vector/open-service-available-24-hours-7-days-with-clock-sign_1017-42536.jpg?w=740&t=st=1677516929~exp=1677517529~hmac=65cafd05ca1500aad3b54595742d5ada962a8bb194d79abecf1af9be690c3443"
            alt="Flipkart logo"
          />
        </div>
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
 * Default values for HomePage
 * 
 * @type {object}
 * @property {string} example='HomePage 
 */

export const defaultProps = {
    example: 'HomePage'
};

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

export default HomePage;