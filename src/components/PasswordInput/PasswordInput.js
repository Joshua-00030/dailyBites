import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import LoginCSS from "../LoginForm/LoginForm.module.css"

const PasswordInput = (props) => {

    const [showPasword, setShowPassword] = useState(false)

    function handleChange(event) {
        const text = event.target.value;
        const inputName = event.target.name 

        props.handleChange({text, inputName});
      };

  return (
    <div className={LoginCSS.passwordcontainer}>
                <input 
                    name={props.name} 
                    className={LoginCSS.logininput}
                    placeholder={props.placeholder}
                    onChange={handleChange}
                    value={props.value}
                    type={showPasword ? null : "password"}
                    required
                /> 
                    <FontAwesomeIcon 
                        onClick={() => {setShowPassword(!showPasword)}} 
                        icon={faEye} 
                        className={LoginCSS.eyeIcon}
                        title="Show Password">
                    </FontAwesomeIcon>
                </div>
  )
}

export default PasswordInput