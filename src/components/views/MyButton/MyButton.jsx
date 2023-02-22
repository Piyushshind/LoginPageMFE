import React from 'react'
import PropTypes from 'prop-types'

import classes from './MyButton.module.css';



/**
 * Impliments MyButton component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns MyButton
 */

export const MyButton = (props) => {
    const {onClick,btnText,className}= props
    return (
        <button onClick={onClick} className={className}>
            {btnText}
        </button>
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
 * Default values for MyButton
 * 
 * @type {object}
 * @property {string} example='MyButton 
 */

export const defaultProps = {
    example:'MyButton'
};

MyButton.propTypes = propTypes;
MyButton.defaultProps = defaultProps;

export default MyButton;