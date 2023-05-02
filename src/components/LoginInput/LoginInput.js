import React from 'react'
import LoginCSS from "../LoginForm/LoginForm.module.css"

const LoginInput = (props) => {

    function handleChange(event) {
        const text = event.target.value;
        const inputName = event.target.name 

        props.handleChange({text, inputName});
      };

  return (
    <div>
        <input 
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            className={LoginCSS.logininput}
            onChange={handleChange} 
            value={props.value} 
            autoFocus
            required/>
        </div>
  )
}

export default LoginInput