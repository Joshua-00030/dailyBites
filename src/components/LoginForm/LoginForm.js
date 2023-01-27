import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = (props) => {

    const [formDetails, setFormDetails] = useState({   
        username: "", 
        password: "", 
        cPassword: "", 
        email: ""
    })
    const [newAccount, setNewAccount] = useState(false)
    const [input, setInputs] = useState(true)

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
    <div className='container'>
        <h1> Welcome {formDetails.username} </h1>
        <form onSubmit={submitHandler}>
            {input ? 
            <div>
                <input 
                    name="username" 
                    placeholder="Username" 
                    onChange={e => setFormDetails({...formDetails, username: e.target.value})} 
                    value={formDetails.name} 
                />
                <input name="password" 
                    placeholder="Password"
                    onChange={e => setFormDetails({...formDetails, password: e.target.value})} 
                    value={formDetails.password} 
                />
            </div> : null} 

            <button type="button" onClick={createNewAccount}>Create New Account</button>
            <button type="button" onClick={forgotPassChange}>Forgot Password?</button>

            {newAccount ?
                <div>
                    <input                     
                        name="cPassword" 
                        placeholder="Confirm Password"
                        onChange={e => setFormDetails({...formDetails, cPassword: e.target.value})} 
                        value={formDetails.cPassword}
                    />
                    <input 
                        name="email" 
                        placeholder="Email Address"
                        onChange={e => setFormDetails({...formDetails, email: e.target.value})} 
                        value={formDetails.email}
                    />
                </div> : null}
            <input type="submit" value="SUBMIT"></input>
        </form>
    </div>
    ) 
}

export default LoginForm