import React from 'react'
import FAQCSS from "./FAQs.module.css"
import { FAQSData } from './FAQSData'

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
               </>
            );
            })}
        {FAQSData.map((val, key) => {
            return (
                <>
                <label className={FAQCSS.infoQuestion}>{val.question}</label>
                <label className={FAQCSS.infoAnswer}>{val.answer}</label>
                </>
            );
            })}
           {FAQSData.map((val, key) => {
            return (
                <>
                </>
            );
            })}
        </div>
    </div>
  )
}

export default FAQs