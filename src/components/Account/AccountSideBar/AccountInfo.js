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
  const [feet, setFeet] = useState(-1)
  const [inches, setInches] = useState(-1)
  const today = (new Date(new Date().setHours(0, 0, 0, 0)).toISOString().split('T')[0]).slice(2).replaceAll('-', '/')

  useEffect(() => {
    userService.setToken(props.user.token)
    userService.getCalorieTotal(props.user.username).then(res => {
      setInitialCal(res)
    }
    )
    userService.getHeight().then(res => {
      console.log(res)
      if(res){
      setFeet(Math.trunc(res / 12))
      setInches(res % 12)
      }
    })
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

  const addWeight = (event) => {
    event.preventDefault()
    if (newWeight <= 0) {
      setErrMsg2("New Weight must be greater than 0.")
      return
    } else {
      setErrMsg2(`New Weight of ${newWeight} added on ${today}`)
    }
    userService.setToken(props.user.token)
    userService.addWeightEntry(props.user.username, newWeight)
  }

  const addHeight = async (event) => {
    event.preventDefault()
    const height = (feet * 12) + inches
    userService.setToken(props.user.token)
    const response = await userService.updateHeight(props.user.username, height)
    if(response.matchedCount === 1){
      props.setUser(u => ({...u, height: height}))
    }
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
            onChange={(e) => setNewWeight(Number(e.target.value))}
            className={AcctInfo.input}
            value={newWeight}
            type="number"
            min="0"
          />
          <button type="submit" value="submit"> Submit</button>
        </form>
        <form onSubmit={addHeight} className={AcctInfo.form}>
          <label className={AcctInfo.label}>My Height</label>
          <select className={AcctInfo.heightBox} name="hFeet" value={feet} onChange={(e) => setFeet(Number(e.target.value))}>
            <option value="-1" disabled>Enter Feet</option>
            <option name="hFeet" value="3">3 ft</option>
            <option name="hFeet" value="4">4 ft</option>
            <option name="hFeet" value="5">5 ft</option>
            <option name="hFeet" value="6">6 ft</option>
            <option name="hFeet" value="7">7 ft</option>
            <option name="hFeet" value="8">8 ft</option>
          </select>
          <select className={AcctInfo.heightBox} name="hIn" value={inches} onChange={(e) => setInches(Number(e.target.value))}>
            <option value="-1" disabled>Enter Inches</option>
            <option name="hIn" value="0">0 in</option>
            <option name="hIn" value="1">1 in</option>
            <option name="hIn" value="2">2 in</option>
            <option name="hIn" value="3">3 in</option>
            <option name="hIn" value="4">4 in</option>
            <option name="hIn" value="5">5 in</option>
            <option name="hIn" value="6">6 in</option>
            <option name="hIn" value="7">7 in</option>
            <option name="hIn" value="8">8 in</option>
            <option name="hIn" value="9">9 in</option>
            <option name="hIn" value="10">10 in</option>
            <option name="hIn" value="11">11 in</option>
          </select>
          <button style={{ float: 'right' }} type="submit" value="submit"> Submit</button>
        </form>
      </div>
      <FeedbackForm />
    </div>
  )
}

export default AccountInfo