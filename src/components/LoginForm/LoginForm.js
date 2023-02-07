import React, { useState } from 'react';
import PasswordInput from '../PasswordInput/PasswordInput';
import LoginInput from '../LoginInput/LoginInput';
import LoginCSS from "./LoginForm.module.css"

const LoginForm = (props) => {

    const [newAccount, setNewAccount] = useState(false)
    const [input, setInputs] = useState(true)
    const [formDetails, setFormDetails] = useState({   
        username: "", 
        password: "", 
        cPassword: "", 
        email: ""
    })
    
    function handleInputChange({text, inputName}) {
            setFormDetails({...formDetails, [inputName]: text})
    }

    function createNewAccount(event) {
        event.preventDefault()
            setNewAccount(true)
            setInputs(true)
    }

    function forgotPassChange(event) {
        event.preventDefault()
        setInputs(false)
        setNewAccount(true)
    }

    function submitHandler(event) {
        event.preventDefault()
        props.Login(formDetails)
    }

    return (
        <div className={LoginCSS.container}>
            <h1 className={LoginCSS.loginh1}>Daily Bites</h1>
            <h2 className={LoginCSS.loginh2}> Welcome {formDetails.username} </h2>
            <form onSubmit={submitHandler}>
                {input ? 
                <div>
                    <LoginInput placeholder="Username" name="username" handleChange={handleInputChange} value={formDetails.name} />
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
            </form>
        </div>
    ) 
}

export default LoginForm