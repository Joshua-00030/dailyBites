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
            name={props.name}
            placeholder={props.placeholder}
            className={LoginCSS.logininput}
            onChange={handleChange} 
            value={props.value} 
            autoFocus/>
        </div>
  )
}

export default LoginInput