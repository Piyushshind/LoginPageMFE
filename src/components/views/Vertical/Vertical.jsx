import React from 'react'
import PropTypes from 'prop-types'

import classes from './Vertical.module.css';



/**
 * Impliments vertical component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Vertical
 */

export const Vertical = (props) => {
    const {children} = props
    return (
        <div className={classes.container}>
            {children}
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
 * Default values for Vertical
 * 
 * @type {object}
 * @property {string} example='Vertical 
 */

export const defaultProps = {
    example:'Vertical'
};

Vertical.propTypes = propTypes;
Vertical.defaultProps = defaultProps;

export default Vertical;