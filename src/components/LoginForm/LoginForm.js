import React, { useState, useEffect } from 'react';
import PasswordInput from '../PasswordInput/PasswordInput';
import LoginInput from '../LoginInput/LoginInput';
import LoginCSS from "./LoginForm.module.css"
import userItemService from "../../services/userItem"
import loginService from "../../services/login"

const LoginForm = (props) => {

    const [newAccount, setNewAccount] = useState(false)
    const [input, setInputs] = useState(true)
    const [formDetails, setFormDetails] = useState({   
        username: "", 
        password: "", 
        cPassword: "", 
        email: ""
    })
    const [shortPassLen, setshortPassLen] = useState(false)
    const [passMismatch, setPassMissmatch] = useState(false)
    const [invalidAcc, setInvalidAcc] = useState(false)

    /*
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedDietappUser')
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          props.setUser(user)
          userItemService.setToken(user.token)
        }
      }, [props])
      */
    
    function handleInputChange({text, inputName}) {
            setFormDetails({...formDetails, [inputName]: text})
    }

    const createNewAccount = async (event) => {
        event.preventDefault()
            setNewAccount(!newAccount)
            setInputs(true)
    }

    function forgotPassChange(event) {
        event.preventDefault()
        setInputs(false)
        setNewAccount(true)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const loginInfo = {
                username: formDetails.username,
                password: formDetails.password,
                cPassword: formDetails.cPassword,
                email: formDetails.email
            }
            if(newAccount && input == true){
                if(formDetails.password === formDetails.cPassword) {
                    if (formDetails.password.length < 10) {
                        setInvalidAcc(false)
                        setPassMissmatch(false)
                        setshortPassLen(true)

                        return 
                    }
                    await loginService.createUser(loginInfo)
                }else {
                    setInvalidAcc(false)
                    setshortPassLen(false)
                    setPassMissmatch(true)
                    return
                }
            }
            const user = await loginService.login(loginInfo)
            
            userItemService.setToken(user.token)
            window.localStorage.setItem(
                'loggedDietappUser', JSON.stringify(user)
            )
            userItemService.setToken(user.token)
            props.setUser(user)
            console.log(user)
        } catch (exception) {
            setshortPassLen(false)
            setPassMissmatch(false)
            setInvalidAcc(true)
            setTimeout(() => {
            }, 5000)
        }
    }

    return (
        //<div className='login-form-container'> from allisons
        <div className={LoginCSS.container}>
            <h1 className={LoginCSS.loginh1}>Daily Bites</h1>
            <h2 className={LoginCSS.loginh2}> Welcome {formDetails.username} </h2>
            <form onSubmit={handleSubmit}>
                {input ? 
                <div>
                    <LoginInput type="text" placeholder="Username" name="username" handleChange={handleInputChange} value={formDetails.name} />
                    <PasswordInput placeholder="Password" name="password" handleChange={handleInputChange} value={formDetails.password} />
                </div> : null} 

                <button type="button" className={LoginCSS.button} onClick={createNewAccount}>Create New Account</button>
                <button type="button" className={LoginCSS.button} onClick={forgotPassChange}>Forgot Password?</button>

                {newAccount ?
                    <div>
                        <PasswordInput placeholder="Confirm Password" name="cPassword" handleChange={handleInputChange} value={FormData.cPassword} />
                        <LoginInput placeholder="Email Address" name="email" handleChange={handleInputChange} value={formDetails.email} />
                    </div> : null}

                <input type="submit" className={LoginCSS.submit} value="Submit"></input>
                {shortPassLen ? 
                <p style={{"color" : "white"}} >Sorry, passwords must be at least 10 characters long.  Please try again.</p> : null}
                {passMismatch ? 
                <p style={{"color" : "white"}} >Passwords do not match.</p> : null}
                {invalidAcc ? 
                <p style={{"color" : "white"}} >Credentials not valid. Please try again.</p> : null}
            </form>
        </div>
    ) 
}

export default LoginForm