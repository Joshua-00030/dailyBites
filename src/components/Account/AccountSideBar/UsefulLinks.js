import React from 'react'
import linkCSS from "./UsefulLinks.module.css"
import { UsefulLinksData } from './UsefulLinksData' 
import FeedbackForm from '../../FeedbackForm/FeedbackForm'

const UsefulLinks = () => {
  return (
    <div>
    <h1 className={linkCSS.h1}>
        Useful Links!
    </h1>
      <p className={linkCSS.pCSS}>
        If you are new to the world of counting calories or simply want to learn more about general
        health and nutrition, then you came to the right place! 
      </p>
      <p className={linkCSS.pCSS}>
        The following links provided down below are informative readings and 
        articles that will further provide knowledge in nutrition and health.  Please 
        take the time to read and understand the basic nutritional tips and guidelines
        to best meet the needs of your body!
      </p>
    <div className={linkCSS.infoblock}>
    {UsefulLinksData.map((val, key) => {
        return (
            <>
            <label className={linkCSS.infoLink}> <a className={linkCSS.linka} target="_blank" rel="noopener noreferrer" href={val.link}>{val.title}</a></label>
            <label className={linkCSS.infoDescription}>{val.description}</label>
            </>
        );
        })}
    </div>
    <FeedbackForm />
</div>
  )
}

export default UsefulLinks