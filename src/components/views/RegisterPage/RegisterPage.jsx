import { Button, OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

//import classes from './RegisterPage.module.css';
import MyButton from '../MyButton/MyButton.jsx';
import { MyInput } from '../MyInput/MyInput';

import classes from './RegisterPage.module.css';
import { isValidEmail, isValidMobile, isValidName, isValidPassword } from './Validation';


/**
 * Impliments RegisterPage component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns RegisterPage
 */

export const RegisterPage = (props) => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [Data, setData] = useState(JSON.parse(localStorage.getItem('userDetails') || '[]') || []);







    const handleSubmit = () => {
        if (isValidEmail(email)) {
            window.alert('Registration Complete !!');
            const dataObj = {
                name: name,
                email: email,
                password: password,
                phone: phone
            }


            setData([...Data, dataObj])

            setEmail('')
            setName('')
            setPhone('')
            setPassword('')

        } else {

            window.alert('enter correct details')
            return
        }



    }
    localStorage.setItem('userDetails', JSON.stringify(Data));

    return (

        <div className={classes.register}>
            <div className={classes.col - 1}>
                <h2>Create an Account</h2>
                <span>register and enjoy the service</span>

                <form id='form' className={classes.flexx} onSubmit={(e) => e.preventDefault()}>
                    <OutlinedInput
                        // className={classes.Input_register}
                        onChange={(e) => setName(e.target.value)} placeholder='Name' value={name} />
                    <OutlinedInput placeholder='Email'
                        // className={classes.Input_register}
                        onChange={(e) => setEmail(e.target.value)} value={email} />
                    <OutlinedInput type="password"
                        // className={classes.Input_register}
                        placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                    <OutlinedInput
                        // className={classes.Input_register}
                        onChange={(e) => setPhone(e.target.value)} placeholder='Mobile number' value={phone} />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSubmit}
                    >
                        Register
                    </Button>
                </form>

            </div>
            <div className={classes.col}>
                <img src='https://media.gettyimages.com/id/1313326409/photo/womens-hands-type-text-on-the-keyboard-of-a-computer-or-laptop-an-office-worker-at-his-desk.jpg?s=612x612&w=0&k=20&c=YxytuknpTgLVsvXVSdHAUdjKqg6twC9HAXeHsep_w2c=' alt="Register-img" />
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
 * Default values for RegisterPage
 * 
 * @type {object}
 * @property {string} example='RegisterPage 
 */

export const defaultProps = {
    example: 'RegisterPage'
};

RegisterPage.propTypes = propTypes;
RegisterPage.defaultProps = defaultProps;

export default RegisterPage;