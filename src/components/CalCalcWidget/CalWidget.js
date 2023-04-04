import { useEffect, useState } from "react"
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"
import LoginInput from "../LoginInput/LoginInput"
import './calWidget.css';

const CalWidget = () => {

    const [bmr, setBmr] = useState({
        gender: "",
        age: "",
        hFeet: "",
        hIn: "",
        weight: "",
        activity: ""
    })

    const [myResult, setMyResult] = useState("")
    const [submitted, setSubmitted] = useState(false)


    function handleChange(event) {
        const text = event.target.value;
        const inputName = event.target.name

        setBmr({...bmr, [inputName]: text})
    }

    function handleSubmit(e) {
        e.preventDefault()
        // console.log(bmr.gender)
        // console.log(bmr.age)
        // console.log(bmr.hFeet)
        // console.log(bmr.hIn)
        // console.log(bmr.weight)
        // console.log(bmr.activity)

        calculateBMR()
    }

    function calculateBMR() {

        let FtToCm = Number(bmr.hFeet) * 30.48
        let InToCm = Number(bmr.hIn) * 2.54
        let myBmr = 0

        if (bmr.gender == "female") {
            console.log("girl")
        
             myBmr = 655.1 + (9.563 * (Number(bmr.weight) * .453592)) +
                (1.850 * (FtToCm + InToCm)) - (6.755 * Number(bmr.age))
        }
        else if (bmr.gender == "male") {
            myBmr = 66.47 + (13.75 * (Number(bmr.weight) * .453592)) +
            (5.003 * (FtToCm + InToCm)) - (6.755 * Number(bmr.age))
        }


        // calulate AMR
        let myAmr = myBmr * Number(bmr.activity)
        myAmr = Math.round(myAmr)
        // myAmr = myAmr.round()

        setMyResult(myAmr)
        setSubmitted(true)
    }

    return(
        <div>
            <p className="calheader">Calculate your Daily Expected Calorie Limit</p>
            <form className="calBox" onSubmit={handleSubmit}>  

                <div className="gridBox">
                    <p className="subHeader">Please Select your Gender:</p>
                    <input  className="radioBtn" required type="radio" id="male" name="gender" value="male" onChange={handleChange}></input>
                    <label className="radioText" htmlFor="html">Male</label><br></br >
                    <input className="radioBtn" type="radio" id="female" name="gender" value="female" onChange={handleChange}></input>
                    <label className="radioText" htmlFor="css">Female</label><br></br>
                </div>

                <div className="gridBox">
                    <p className="subHeader">Please Type in Your Age:</p>
                    <input className="inputBox" required name="age" type="number" value={bmr.age} onChange={handleChange} ></input>
                </div>

                <div className="gridBox">
                <p className="subHeader">Please Enter your Height:</p>
                <select className="selectBox" name="hFeet" required value={bmr.hFeet} onChange={handleChange}>
                    <option name="hFeet" value="3">3 ft</option>
                    <option name="hFeet" value="4">4 ft</option>
                    <option name="hFeet" value="5">5 ft</option>
                    <option name="hFeet" value="6">6 ft</option>
                    <option name="hFeet" value="7">7 ft</option>
                    <option name="hFeet" value="8">8 ft</option>
                </select>
                <select className="selectBox"  name="hIn" required value={bmr.hIn} onChange={handleChange}>
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
                </div>

                <div className="gridBox"> 
                    <p className="subHeader">Please Type in Your Weight (lbs):</p>
                    <input className="inputBox" required name="weight" type="number" value={bmr.weight} onChange={handleChange}></input>
                </div>

                <div className="gridBox"> 
                    <p className="subHeader">Please Select How Active Are You?</p>
                
                    <input className="radioBtn" required type="radio" id="sed" name="activity" value="1.2" onChange={handleChange}></input>
                    <label className="radioText" htmlFor="html">Sedentary (Little or No Exercise)</label><br></br>
                    <input className="radioBtn" type="radio" id="LA" name="activity" value="1.375" onChange={handleChange}></input>
                    <label className="radioText" htmlFor="css">Light Activity (Exercise 1-3 days/week)</label><br></br>
                    <input className="radioBtn" type="radio" id="MA" name="activity" value="1.55" onChange={handleChange}></input>
                    <label className="radioText" htmlFor="html">Moderate Activity (Exercise 3-5 days/week)</label><br></br>
                    <input className="radioBtn" type="radio" id="A" name="activity" value="1.725" onChange={handleChange}></input>
                    <label className="radioText" htmlFor="html">Active (Exercise 6-7 days/week)</label><br></br>
                    <input className="radioBtn"type="radio" id="VA" name="activity" value="1.9" onChange={handleChange}></input>
                    <label className="radioText" htmlFor="css">Very Active (Hard Exercise 6-7 days/week)</label><br></br>
                </div>
                <input className="gridSubmit" type="submit" value="Calculate"></input>
            </form>

            {submitted ? <p className="result">You burn {myResult} calories during a typical day!</p> : ""}
        </div>
    )
    }

export default CalWidget