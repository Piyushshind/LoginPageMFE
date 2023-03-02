import React, { useState } from 'react'
import PropTypes from 'prop-types'

import classes from './RoutingComponant.module.css';
import { Route, Routes } from 'react-router-dom';
import Centerlizer from '../Centerlizer/Centerlizer';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import SingleProductPage from 'ProductPageMFE/SingleProductCard';
import CheckoutPage from 'CheckoutPageMFE/CheckoutPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import useMfeStore from '../../../utils/zustand';

/**
 * Impliments RoutingComponant component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns RoutingComponant
 */


export const RoutingComponant = (props) => {
    // const { routes = [{
    //     path: "/", element: <HomePage />,
    //     path: "/login", element: <LoginPage />,
    //     path: "/signIn", element: <RegisterPage />,
    //     path: "/product", element: <SingleProductPage />,
    //     path: "/checkout", element: <CheckoutPage />,
    //     path: "*", element: <ErrorPage />,

    // }] } = props;
    return (
        <>
            <Centerlizer>
                <Routes >
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="signIn" element={<RegisterPage />} />
                    <Route path="product" element={<SingleProductPage />} />
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