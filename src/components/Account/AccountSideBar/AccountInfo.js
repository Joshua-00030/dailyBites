import React, { useEffect, useState } from 'react'
import AcctInfo from "./AccountInfo.module.css"
import userService from '../../../services/users'
import FeedbackForm from '../../FeedbackForm/FeedbackForm'

const AccountInfo = (props) => {

  const [initialCal, setInitialCal] = useState(0)
  const [myCalLimit, setNewCalLimit] = useState(0)
  const [errMsg, setErrMsg] = useState(null)
  const [errMsg2, setErrMsg2] = useState(null)
  const [newWeight, setNewWeight] = useState(null)
  const today = (new Date(new Date().setHours(0, 0, 0, 0)).toISOString().split('T')[0]).slice(2).replaceAll('-','/')

  useEffect(() => {
    userService.setToken(props.user.token)
    userService.getCalorieTotal(props.user.username).then(res => {
      setInitialCal(res)
    }
    )
  }, [])

  function handleChange(event) {
    event.preventDefault()

    setNewCalLimit()
    // check for valid calorie limit
    if (myCalLimit <= 0) {
      setErrMsg("Calorie limit must be greater than 0.")
      return
    }
    setErrMsg(null)
    userService.setToken(props.user.token)
    userService.updateCalorieLimit(props.user.username, myCalLimit).then(res => {
      console.log("success")
      setInitialCal(myCalLimit)
    })
  }

  function handleInputChange(event) {
    event.preventDefault()
    const val = Number(event.target.value);
    setNewCalLimit(val)
  }

  const addWeight = (event) =>{
    event.preventDefault()
    if (newWeight <= 0) {
      setErrMsg2("New Weight must be greater than 0.")
      return
    }else{
      setErrMsg2(`New Weight of ${newWeight} added on ${today}`)
    }
    userService.setToken(props.user.token)
    userService.addWeightEntry(props.user.username, newWeight)
    

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
        <label className={AcctInfo.label} >My Calorie Daily Limit</label>
        <input
          name="myCalorieLimit"
          value={initialCal}
          className={AcctInfo.input}
          disabled
          autoFocus />
        <form onSubmit={handleChange} className={AcctInfo.form}>
          <label className={AcctInfo.label}>Update My Calorie Limit</label>
          <input
            name="updateCalLimit"
            placeholder="0"
            className={AcctInfo.input}
            onChange={handleInputChange}
            value={myCalLimit}
            type="number"
            min="0"
          />
          <button type="submit" value="submit"> Submit</button>
          {errMsg ? <p style={{ "color": "white", "text-align": "center" }} >{errMsg}</p> : null}
        </form>
        <form onSubmit={addWeight} className={AcctInfo.form}>
          <label className={AcctInfo.label}>Set Weight On {today}</label>
          <input
            name="addWeightEntry"
            placeholder="0"
            onChange={(e) => setNewWeight(Number(e.target.value)) }
            className={AcctInfo.input}
            value={newWeight}
            type="number"
            min="0"
          />
          <button type="submit" value="submit"> Submit</button>
          {errMsg2 ? <p style={{ "color": "white", "text-align": "center" }} >{errMsg2}</p> : null}
        </form>

      </div>
      <FeedbackForm />
    </div>
  )
}

export default AccountInfo