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
         <section className={classes.page_404}>
	< div className={classes.container}>
		<div className={classes.row}>	
		<div className={classes.col}>
		<img src='https://s3-alpha-sig.figma.com/img/08a0/5ebb/ee289850f852e7ca584541b272910f98?Expires=1678060800&Signature=CFuz8D6ICxL3iGSMSfo8nyoEo5QetlAneVupoDZg-xCUJeHzlDmgXyRoHIkaq2zA6Kddhtg2f3QcNqwmcPw1R71G4J1HhYvKHyn5-1JMhPe3byhAjkBwa8h2FG-yC4O9lpxGV8vwoySaBnGZuXzzlLFqwaFw58dYqvqlUsF6DLyfd-1soKteDa6S8SP5G6Nh9hL1WS9-GSkKnlqO4lMCTc4BTohrcPPHt-k-Tr6r0XJxDhKDlJdseY3reCP5hliwu7v2sWjlVqPUoRrSDuo6hna9nlirtaY6MBTeJ0LHKA0gpTN-tYyyy4jn-YzmiGtivewkQIjMOMm~EayWUSEJrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
				alt='error'
				/>
		<div className={classes.four_zero_four_bg}>
			<h1 className={classes.text }>
				Please Cheack your URL else try again later
			</h1>
		
			
		</div>
		
		<div className={classes.contant_box_404}>
		<h3 className={classes.h2}>
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<a href="/" className={classes.link_404}>Go to Home</a>
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