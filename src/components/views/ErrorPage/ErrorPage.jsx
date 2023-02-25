import React from 'react'
import PropTypes from 'prop-types'

import classes from './ErrorPage.module.css';



/**
 * Impliments ErrorPage component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns ErrorPage
 */

export const ErrorPage = (props) => {
    return (
        <div className={classes.container}>
         <section className={style.page_404}>
	< div className={style.container}>
		<div className={style.row}>	
		<div className={style.col}>
		
		<div className={style.four_zero_four_bg}>
			<h1 className={style.text }>404</h1>
		
		
		</div>
		
		<div className={style.contant_box_404}>
		<h3 className={style.h2}>
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<a href="/" className={style.link_404}>Go to Home</a>
	</div>
		</div>
		</div>
		</div>
	      
   </section>
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
 * Default values for ErrorPage
 * 
 * @type {object}
 * @property {string} example='ErrorPage 
 */

export const defaultProps = {
    example:'ErrorPage'
};

ErrorPage.propTypes = propTypes;
ErrorPage.defaultProps = defaultProps;

export default ErrorPage;