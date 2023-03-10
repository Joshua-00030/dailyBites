import React, { useState } from 'react'
import AcctInfo from "./AccountInfo.module.css"

const AccountInfo = (props) => {

  const [myCalLimit, setNewCalLimit] = useState(0)

  function handleChange(event) {
    event.preventDefault()
    console.log("pressed")
    console.log(myCalLimit)
    
  }

  function handleInputChange(event) {
    const val = event.target.value;
    setNewCalLimit(val)
}


  return (
    <div>
      <h1 className={AcctInfo.h1}>
        Account Information
      </h1>
      <div className={AcctInfo.infoblock}>
        <label className={AcctInfo.label}>My Username</label>
        <input 
              name={props.user.username}
              value={props.user.username}
              className={AcctInfo.input}
              disabled
              autoFocus />
        <label className={AcctInfo.label} >My Email Address</label>
        <input 
            name={props.user.email}
            value={props.user.email}
            className={AcctInfo.input}
            disabled
            autoFocus />
          <form onSubmit={handleChange} className={AcctInfo.form}>
            <label className={AcctInfo.label}> My Calorie Limit</label>
            <input 
                name="myCalLimit"
                value={myCalLimit}
                className={AcctInfo.input}
                onChange={handleInputChange}
                type="text"
                autoFocus />
            <button type="submit" value="submit"> Submit</button>
          </form>

        </div>
      </div>
  )
}

export default AccountInfo