import React, { useState } from 'react'
import PropTypes from 'prop-types'

import classes from './RoutingComponant.module.css';
import { Route, Routes } from 'react-router-dom';
import Centerlizer from '../Centerlizer/Centerlizer';
import HomePage from '../HomePage/HomePage';
//import Aboutus from '../HomePage/Aboutus';
import LoginPage from '../LoginPage/LoginPage';
import ErrorPage from '../ErrorPage/ErrorPage';
//import SingleProductCard from 'ProductPageMFE/SingleProductCard';
import CheckoutPage from 'CheckoutPageMFE/CheckoutPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import Aboutus from 'HomePageMFE/Aboutus'
/**
 * Impliments RoutingComponant component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns RoutingComponant
 */


export const RoutingComponant = (props) => {
   
    return ( 
        <>
            <Centerlizer>
                <Routes >
                   
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signIn" element={<RegisterPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    
                    <Route path="/aboutus" element={<Aboutus />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Centerlizer>
           
        </>
    )
}




// {routes.map((route,i )=>
//     <Route key={i} path={route.path} element={route.element} />
// )}

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
 * Default values for RoutingComponant
 * 
 * @type {object}
 * @property {string} example='RoutingComponant 
 */

export const defaultProps = {
    example: 'RoutingComponant'
};

RoutingComponant.propTypes = propTypes;
RoutingComponant.defaultProps = defaultProps;

export default RoutingComponant;