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
            {productData.map((x) => {
                return (<Vertical> <ProductCard  {...x} /> </Vertical>)
            }



            )}

            <Hero />
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