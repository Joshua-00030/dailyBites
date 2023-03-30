import FBFCSS from "./FeedbackForm.module.css"
import React, { useState } from 'react'

const FeedbackForm = () => {
    const [submitted, setSubmitted] = useState(false)
    const [errMsg, setErrMsg] = useState("")

    async function onSubmit() {
        document.body.style.cursor='wait'
        await new Promise(r => setTimeout(r, 1000));
        document.body.style.cursor = "auto"
        setSubmitted(true)
    }

  return (
    <div>
        <hr className={FBFCSS.hr}></hr>
        {submitted ? 
        <div>
            <h1 className={FBFCSS.hColor}>
                Your Response Has Been Submitted!
            </h1> 
            <h2 className={FBFCSS.hColor}>The Daily Bites Team Will Respond As Soon As Possible!</h2>

        </div> : 
        <div>
            <form className={FBFCSS.feedbackContainer}>
            <label className={FBFCSS.label}>Please provide any feedback, questions, and/or concerns down below.</label>
            <textarea 
                className={FBFCSS.ta}
                placeholder="Please Type Here..."
                rows={10}
                cols={20}
                >
                </textarea>
            <button className={FBFCSS.button} type="button" onClick={onSubmit}>Submit</button>
            </form>
        </div>
}
    </div>

  )
}

export default FeedbackForm

