import React from 'react'
import PropTypes from 'prop-types'
import Text from '../Text/Text';
import classes from './Hero.module.css';
import Carousele from './Carousel';



/**
 * Impliments Hero component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Hero
 */

export const Hero = (props) => {

  return (<>
   
    <Carousele />
    <div >
     <img 
     style={{width:'1584px',height:'483px' ,left: '168px', top: '725px',borderRadius: '15px'}}
     src="https://s3-alpha-sig.figma.com/img/3289/f868/60a377557f55640e2ceca89d5fb00052?Expires=1678060800&Signature=KkgF7Hmn0Q6XVLLZJrxwMVACZsoWm7DCpOX1i-GydtTNn1tREGhkrV1B9bG3unEN9PZLN84I7a9jhkNlqC8plh7bgOsPPvnFud-7g50vsqkmJSDsGpy0wMpjA1YeKEsuFLX89KXUDmkghu2MwW4lEwF06Eg8banX0n53pPrzON4RJr0VPyJjEqg0llisZ2X3cI2r42FDuU7Av2tLgx0EiqKkOOd~cEC1OOuvLvr3Y-IqndlnPuh2BLsshOLFEBAkWmTNsoUIMTECW7-dhS75tG8peF17-FLSVZaN~jO9eKhppGNbcrXKtfvPaVvAT~napZ5uNBGqaxLjSboUYt5j4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt ='map'/>
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
  example: PropTypes.string
};

/**
 * Default values for Hero
 * 
 * @type {object}
 * @property {string} example='Hero 
 */

export const defaultProps = {
  example: 'Hero'
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;