import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { createNewUser, fbLogin, googleLogin, resetPassword, signInUser } from './authManager';
import { UserContext } from '../../App';
import './Auth.css'
import { useLocation, useNavigate } from 'react-router-dom';


const Auth = () => {

    const [formData, setFormData] = useState({
        isNewUser: true,
    });

    const [userInfo, setUserInfo] = useContext(UserContext);
    const [resetPass, setResetPass] = useState('')

    const passwordRef = useRef(null);
    const confirmPassRef = useRef(null);
    const emailRef = useRef(null);

    const [error, setError] =useState({});

    const location = useLocation();
    const  navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'


    const handleSubmit = (e)=>{
        e.preventDefault();

        // check password validity
        if(formData.isNewUser && !formData.password ){
            const errorMsg = 'Password must be atleast 6 charracters, with atleast one uppercase, one lowercase, one number, and one special characters.';
            setError({ password:errorMsg})
            passwordRef.current.focus()
            return
        }

        // check confirmPass matches the password
        if(formData.isNewUser && !formData.confirmPass){
            const errorMsg = 'Passwords do not match.';
            setError({ confirmPass:errorMsg})
            if(confirmPassRef?.current){
                confirmPassRef.current.focus()
            }
            return
        } 

        // create new user
        if(formData.isNewUser){
            createNewUser(formData.name, formData.email, formData.password)
            .then(res=>handleResponse(res,true))
        }

        //  user sign-in with password
        if(!formData.isNewUser){
            
            signInUser(formData.email, formData.password)
            .then(res=>handleResponse(res,true))
        }
    }

    // google login
    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(res=>handleResponse(res,true))
    }

    // Fb login
    const handleFbLogin = ()=>{
        fbLogin()
        .then(res=>handleResponse(res,true))
    }


    // handleResponse
    const handleResponse =(res, redirect)=>{
        // set userInfo
        setUserInfo(res);
        // navigate 
        if(redirect){
            navigate(from);
        }
        // send user info to backend
        fetch('http://localhost:3000/users',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
            },
            body: JSON.stringify(res.user)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    
    // reset password
    const handleResetPasword =()=>{
        const email = emailRef.current.value;
        resetPassword(email)
        .then(res=>setResetPass(res));
    }

    const handleChange = (e)=>{
        // console.log(e.target.value);
        let validField = true;
        
        if(e.target.name === 'password'){
            const password = e.target.value;
            const validLength = password.length>6;
            const hasDigit = /\d/.test(password);
            const hasCapital = /[A-Z]/.test(password);
            const hasSmaller = /[a-z]/.test(password);
            const hasSpecialChar =/[!@#$%^&*]/.test(password);
            validField = validLength && hasDigit && hasCapital && hasSmaller && hasSpecialChar;
          
        }
        if(e.target.name === 'confirmPass'){
           const confirmPass = e.target.value;
           validField = confirmPass === formData.password
        }
         if(validField){
                const newUserInfo = {...formData}
                newUserInfo[e.target.name] = e.target.value;
                setFormData(newUserInfo);
        }
    }    
    // console.log('userToken:', sessionStorage.getItem('authToken'))

    return (
        <>
            <Header/>
            <div className='d-flex  justify-content-center align-items-center  '>
                {/* Custom login and register */}
                <Form className='mt-3 p-3 bg-white border rounded' style={{fontSize:'small', width: '350px', minHeight: 'auto', }} onSubmit={handleSubmit} >
                {formData.isNewUser &&
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Enter Name" 
                          className="form-control-sm" 
                          name='name'
                          onChange={handleChange}
                          required />
                    </Form.Group>
                }
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                          type="email" 
                          placeholder="Enter email" 
                          className="form-control-sm" 
                          name='email' 
                          ref={emailRef}
                          onChange={handleChange}
                          required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                          type="password" 
                          placeholder="Password" 
                          className="form-control-sm"  
                          name='password' 
                          ref={passwordRef}
                          onChange={handleChange}
                          required/>
                    </Form.Group>
                    {error.password && <p className='text-danger'>{error.password}</p> }
                    
                    { formData.isNewUser ? <>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                          type="password" 
                          placeholder="Password" 
                          className="form-control-sm" 
                          name='confirmPass' 
                          ref={confirmPassRef}
                          onChange={handleChange}
                          required />
                    </Form.Group>
                    {error.confirmPass && <p className='text-danger'>{error.confirmPass}</p> }
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check 
                          type="checkbox" 
                          label="i agree to the terms and conditions" 
                          name='checkTerm' 
                          onChange={handleChange}
                          required />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='d-block mx-auto w-50 ' >
                        Register
                    </Button>
                    <button 
                      className='m-auto d-block mt-2 border-0 text-primary text-decoration-underline bg-transparent ' 
                      style={{cursor:'pointer'}} 
                      onClick={(e)=>setFormData({...formData,isNewUser:false})} >
                        Already have an account?
                    </button>
                </>
                :<> 
                    <Button variant="primary" type="submit" className='d-block mx-auto w-50 border-0'> Login</Button>               
                    <button 
                      className='m-auto d-block mt-2 border-0 text-primary text-decoration-underline bg-transparent ' 
                      style={{cursor:'pointer'}} 
                      onClick={(e)=>setFormData({...formData,isNewUser:true})} >
                        Don't have an account?
                    </button>
                    <button 
                      className='m-auto d-block mt-2 border-0 text-danger text-decoration-underline bg-transparent ' 
                      style={{cursor:'pointer'}} 
                      onClick={handleResetPasword} >
                       forgot password?
                    </button>
                    {resetPass && <p className='text-success text-center' >{resetPass}</p> }
                </>

                }
                </Form>

                <h5 className='mx-5'>OR</h5>

                {/* Social login */}
                <div>
                    <Button 
                      type='button' 
                      className=' w-100 m-2 p-0 border rounded-pill bg-white text-dark d-flex justify-content-center align-items-center'
                      onClick={handleGoogleLogin}
                      >
                        <FontAwesomeIcon icon={ faGoogle } className='p-2 text-danger' style={{    marginLeft: '-25px'}} />    
                        <p className='m-0 p-2'>Continue with Google</p>                    
                    </Button>
                    <Button 
                       type='button' 
                       className=' w-100 m-2 p-0 border rounded-pill bg-white text-dark d-flex justify-content-center align-items-center' 
                       onClick={handleFbLogin}
                       >

                        <FontAwesomeIcon icon={ faFacebook } className='p-2 text-primary' />    
                        <p className='m-0 p-2'>Continue with Facebook</p>                    
                    </Button>
                </div>
            </div>
            {userInfo.errorMessage && <p className='text-danger text-center' > { userInfo.errorMessage } </p> }
        </>
    );
};

export default Auth;