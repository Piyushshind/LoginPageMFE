import React, { useState } from 'react'
import PropTypes from 'prop-types'

import classes from './RoutingComponant.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
    const count = useMfeStore(state => state.count)
    return (
        <>
            <h1>{count}</h1>
            <Centerlizer>
                <Routes>
                    <Route path='/' element={<HomePage useMfeStore={useMfeStore} />} />
                    <Route path='/login' element={<LoginPage useMfeStore={useMfeStore} />} />
                    <Route path='/signIn' element={<RegisterPage useMfeStore={useMfeStore} />} />
                    <Route path='/product' element={<SingleProductPage useMfeStore={useMfeStore} />} />
                    <Route path='/checkout' element={<CheckoutPage useMfeStore={useMfeStore} />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Centerlizer>

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