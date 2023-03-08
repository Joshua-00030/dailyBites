import React from 'react'
import FAQCSS from "./FAQs.module.css"
import { FAQSData } from './FAQSData'
import FeedbackForm from '../../FeedbackForm/FeedbackForm'

function FAQs() {
  return (
    <div>
        <h1 className={FAQCSS.h1}>
            Frequently Asked Questions
        </h1>
        <div className={FAQCSS.infoblock}>
        
        {FAQSData.map((val, key) => {
            return (
                <>
                <label className={FAQCSS.infoQuestion}>{val.question}</label>
                <label className={FAQCSS.infoAnswer}>{val.answer}</label>
                </>
            );
            })}
           
        </div>
        <FeedbackForm />
    </div>
  )
}

export default FAQs