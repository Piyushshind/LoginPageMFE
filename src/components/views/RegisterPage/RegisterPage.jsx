import React ,{useState} from 'react'
import PropTypes from 'prop-types'
import {useForm} from 'react-hook-form';
//import classes from './RegisterPage.module.css';
import style from './RegisterPage.module.css'
import MyInput from '../MyInput/MyInput';
import MyButton from '../MyButton/MyButton.jsx'
import { isValidEmail ,isValidPassword,isValidMobile,isValidName} from './Validation';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userData } from '../../../Recoil/Recoil';


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
    const setData = useSetRecoilState(userData)
    
    
    

    const dataObj ={
        name:name,
        email:email,
        password:password,
        phone:phone
    }
    
     const handleSubmit = () => {
       if(isValidName(name)===true && isValidEmail(email)===true && isValidPassword(password)===true && isValidMobile(phone)===true){
        window.alert('Registration Complete !!');
        // localStorage.setItem('userDetails', JSON.stringify(dataObj));
        setData(dataObj)
       
       }else{
        window.alert('enter correct details')
       }
       console.log(dataObj)
      
     }
    return (
        
        <div className={style.register}>
            <div className={style.col-1}>
                <h2>Create an Account</h2>
                <span>register and enjoy the service</span>

                <form id='form' className= {style.flexx} onSubmit={(e)=>e.preventDefault()}>
                    <MyInput className={style.Input_register} onChange={(e)=>setName(e.target.value)} placeholder='Name'value={name} />
                    <MyInput placeholder='Email' className={style.Input_register} onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    <MyInput type="password" className={style.Input_register} placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    <MyInput className={style.Input_register} onChange={(e)=>setPhone(e.target.value)} placeholder='Mobile number'value={phone} />
                    <MyButton className={style.btn} onClick={handleSubmit} btnText='Register'/>
                </form>

            </div> 
            <div className={style.col}>
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
    example:'RegisterPage'
};

RegisterPage.propTypes = propTypes;
RegisterPage.defaultProps = defaultProps;

export default RegisterPage;