import React from 'react'
import PropTypes from 'prop-types'
import classes from './Banner4.module.css';




/**
 * Impliments Banner4 component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Banner4
 */

export const Banner4 = (props) => {
    const {children,img,text,button} = props
    return (<>
        <div className={classes.container}>
            {props.example}
            {children}
           <img src={img}/>
        </div>
        
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
    example: PropTypes.string,
    img: PropTypes.string
};

/**
 * Default values for Banner4
 * 
 * @type {object}
 * @property {string} example='Banner4 
 */

export const defaultProps = {
    example:'Banner4',
    img:'https://s3-alpha-sig.figma.com/img/de8c/488a/87b9ce16acd7436a6dec758331c840bc?Expires=1678060800&Signature=TIisxDqwOqe7jFk7k5psYzmKlSkct6vF~fMoJXJCbDCp3rrhbwI4QGjfYjGJSybebT74WocLIt-PKiEMOvg5ZaysXSHSA4lKafFD-G4IfyQ9aaOx3Ibe3kh6ddYhAG77GNbOMsk0LDZ-3fGrELQvSQ-5iMHo7SHGeSaeis6hRJnx-6XG4DD1xIsAlgyZlfNB~GTEZrsIHyW6NJxa5dYwDgRrRdYUkSfxlJ0WvMjyzhaIRGGDvi2lPwzvRyLE7FihBt1b-qECE6igzFMo-sJp3CAh8mG2KTmyFZvhj8fX3WX~r4uadYl0hYcU82M-FIUm4mM3Le-qMKKmKAKUnlPNSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    
};

Banner4.propTypes = propTypes;
Banner4.defaultProps = defaultProps;

export default Banner4;