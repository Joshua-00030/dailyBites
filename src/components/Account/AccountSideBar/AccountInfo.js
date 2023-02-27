import React from 'react'
import AcctInfo from "./AccountInfo.module.css"

const AccountInfo = (props) => {
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
        </div>
      </div>
  )
}

export default AccountInfo