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
    <div className={classes.container}>
      <div className={classes.info}>
        <Text variant='heading-1'>Dont miss amazing grocery deals</Text>
        <Text variant='sm'>Sign up for the daily newsletter</Text>

      </div>
      <div className={classes.heroimg}>
        <img className={classes.heroimg} src='/Assets/heroimg.png' alt='apples' />
        <img className={classes.heroimg} src='https://s3-alpha-sig.figma.com/img/b3e9/c055/893e565efaee5bf2a51d16c2b092f6b4?Expires=1678060800&Signature=KRts4527yrX1zQhZXpRstbi0nmnwGZPRmp6cyAG6MNMINPr4LaCjPO7~MDN89dGEQfKxBzNWXr7U0hI39lX2BW~DVLCU1LPiWzh16m8bqxvYiJk1-BP3iV7~ltQA6nKp7YRJM6-Dj32jZehNSNq3mLXug9qXIPrh~L5NVIIFY1T-PivoqSKFr-KhGiERYv6eA8yJzWWhgNcnNOz2xU2NON9VGQ1hZDZWAmiNNvt4933TnaLM8D1ZuJzqhSOkkOu-Q49TH3~YyNIxz~qkKSx8PerRmAT1FI5U-iHAA83GxESN0NbLiwVaqRqqqS4Bm3P67GNqFNs~fuVbxom4JvHphA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='apples' />
        <span><img src='https://s3-alpha-sig.figma.com/img/8370/e915/8a586f746c0b10b70cd405c8aa1f2038?Expires=1678060800&Signature=pw6PNgXyTPPJweyoK3er80zUkWMxroRmQCnyi0fomt25oYKz3AwcxE85BKvg0CLHYyU93bSFyBOjUIqEtgu0DKkkrJ869o0lpX1Jd45o26ep3iEoJIcIwh15AYOl~RPVvV8F4MKWVu0IZPYl5CqhjPC0VDFVYLOQpMhEwAWluamMsDAh1~KLy-yTA7BqMDvDI6UkeT55lVYOf-y0xlPh0EN87NZd4M9aSyowycXZ-wxx8KVRPYex7ThOdIT7d5ULFjocQ-vTUDiR8HJudW-TX~3GOS65M0poeI9U1FauCUhpu3rD4VuD55MNTWb7M1k2G2veEs5Ohu1xmw3-U170xQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
          <img src='https://s3-alpha-sig.figma.com/img/fa19/6bce/6720167ebdfcf5d3f8a2d76053176f9a?Expires=1678060800&Signature=SyXCz~yPZtyg~l--jlcCnLOXNLOp2ouAOVJHWRh4cLVChjg5sM7V9OleIYyHHEm58fg04Z8URXrS8GrHCVWqQu4wkOyySl4g4kbDdnEiZ2phE3jSbCd2DcN0qvwfJralC3IT6QSmowar2MHUrpicUDrOzZEZkfRHw8ZQ2lGKyakhFUE3G1wd1f7FjPeBOSWzZ66A345iY17C5LfQdEfX369QMvn4AVECHesp7q5Zznoe2LDXPVnmLWV7h15l~pU8hZ3vbYbanImlVjJqkLSvtlyEwYOtJjVhkBLm9aiB3I5zbHkkIBZCtCKRFCP2GB-D71hXZTj9lttb96IsPjgLTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
          <img src='https://s3-alpha-sig.figma.com/img/eb0a/46d6/bf3d30616b8cd69f4b03064fe254350c?Expires=1678060800&Signature=qmI0sWxz6e65DrbBBkC-Eel2GpdFeosQ68MdIrZTuu1jjC1Nh29jYHwjc3StjONtOP~P4XrFc2B6V0afP0VsgZ7aYNeuL6ZdNFui0zOoIihLOfeWxfXlwCJPgEmsr2sDeCL4kKmTyxZhtIPnMIENGK99jSa9fDSboR7MF9r4mCo5HD3~Mv1eEdAM9uyxWPQwfqK7a7TSR4xazsY7U6EB-envFKzT1BaYX2Sfj71pPcMXkvy~MWnQwHBr05y~WI3kLRHihbBJTDfmhI9tzbr1YB5DDB0WVEwZePMbRgpAWMRouFVavU9suiIJo~mnp69uQTJ8Fyz2T1tl9fqh4Q9Law__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
        </span></div>

    </div>
    <Carousele />
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