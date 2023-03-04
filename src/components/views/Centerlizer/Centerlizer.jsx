import React from 'react'
import PropTypes from 'prop-types'

import classes from './Centerlizer.module.css';



/**
 * Impliments Centerlizer component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Centerlizer
 */

export const Centerlizer = (props) => {
    const { children } = props
    return (
        <div className={classes.container}>
            <div>
                {children}
            </div>
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
 * Default values for Centerlizer
 * 
 * @type {object}
 * @property {string} example='Centerlizer 
 */

export const defaultProps = {
    example: 'Centerlizer'
};

Centerlizer.propTypes = propTypes;
Centerlizer.defaultProps = defaultProps;

export default Centerlizer;