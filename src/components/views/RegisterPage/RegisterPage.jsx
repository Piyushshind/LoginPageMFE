import { Button, OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid'
import classes from './RegisterPage.module.css';
import { isValidEmail, isValidMobile } from './Validation';


/**
 * Impliments RegisterPage component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns RegisterPage
 */

export const RegisterPage = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/;
    const validate = (isValidEmail(email) && isValidMobile(phone) && passwordRegex.test(password))
    const handleSubmit = () => {
        const registerdUsers = JSON.parse(localStorage.getItem('userDetails') || '[]')

        if (registerdUsers.findIndex(user => user.email == email) != -1) {
            window.alert('Already registered, please login');
            window.location.href = '/login'
            return
        }
        if (validate) {
            window.alert('Registration Complete !!');
            const dataObj = {
                name: name,
                id: nanoid(),
                email: email,
                password: password,
                phone: phone
            }
            setEmail('')
            setName('')
            setPhone('')
            setPassword('')
            localStorage.setItem('userDetails', JSON.stringify(
                [...registerdUsers,
                    dataObj]));
        } else {
            window.alert('enter correct details')
            return
        }
    }

    return (

        <div className={classes.register}>
            <div className={classes.col}>
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
                    <span>Alraedy have an account ? <Link to='/login'>Login</Link></span>
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