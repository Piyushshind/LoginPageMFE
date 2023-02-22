import React ,{useState} from 'react'
import PropTypes from 'prop-types'
import {useForm} from 'react-hook-form';
//import classes from './RegisterPage.module.css';
import './RegisterPage.css'
import MyInput from '../MyInput/MyInput';
import MyButton from '../MyButton/MyButton.jsx'
import { isValidEmail ,isValidPassword,isValidMobile} from './Validation';


/**
 * Impliments RegisterPage component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns RegisterPage
 */

export const RegisterPage = (props) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState('');
    const [userDetails, setUserDetails] = useState([])
    
    

    const dataObj ={
        email:email,
        password:password,
        phone:phone
    }
     const handleSubmit = () => {
       if(isValidEmail(email)===true && isValidPassword(password)===true && isValidMobile(phone)===true){
        window.alert('Registration Complete !!');
        localStorage.setItem('userDetails', JSON.stringify(dataObj));
        console.log(dataObj)
       }else{
        window.alert('enter correct details')
       }
       
      
     }
    return (
        <div >
          <section>
        <div className="register">
            <div className="col-1">
                <h2>Create an Account</h2>
                <span>register and enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={(e)=>e.preventDefault()}>
                    <MyInput placeholder='email' className='Input_register' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    <MyInput type="password" className='Input_register' placeholder='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                   
                    <MyInput className='Input_register' onChange={(e)=>setPhone(e.target.value)} placeholder='mobile number'value={phone} />
                    {error && <p>{error}</p>}
                    <MyButton className='btn' onClick={handleSubmit} btnText='Sign In'/>
                    {/* <button  className='btn'>Sign In</button> */}
                </form>

            </div>
            <div className="col-2">
                <img src='https://media.istockphoto.com/id/589417822/photo/fresh-fruits-and-vegetables.jpg?s=612x612&w=is&k=20&c=We29D01wS_wJKUe9mlq1wBTxvuWfqeJtDhv0v81IRPU=' alt="asd" />
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
 * Default values for RegisterPage
 * 
 * @type {object}
 * @property {string} example='RegisterPage 
 */

export const defaultProps = {
    example:'RegisterPage'
};

RegisterPage.propTypes = propTypes;
RegisterPage.defaultProps = defaultProps;

export default RegisterPage;