import { fontWeight } from '@mui/system'
import React from 'react'
import HowToCss from "./HowTo.module.css"
import FeedbackForm from '../../FeedbackForm/FeedbackForm'

const HowTo = (props) => {
  return (
    <div>
        <h1 className={HowToCss.h1}>
            A Guide to Daily Bites!
        </h1>
        <div className={HowToCss.infoblock}>
          <div className={HowToCss.infotext}>

            <div className={HowToCss.section}>
              <label className={HowToCss.headerlabel}>Welcome!</label>
              <label className={HowToCss.label} > Hello! Welcome to <em>Daily Bites! </em>  
                The friendly and easy way for users to keep track of their calories!  
                In this quick and easy guide, we will cover the basics of <em> Daily Bites </em>
                to ensure that YOU are successful in your journey of calorie counting.
              </label>
            </div>

            <div className={HowToCss.section}>
              <label className={HowToCss.headerlabel}>Home Page</label>
              <label className={HowToCss.label}>
                  To begin, lets start by looking at the Home Page.  When users log into
                  <em> Daily Bites</em>, they will immediately be directed to the Home Page!  The Home Page
                  will display all basic information for the user.
              </label>
            </div>

            <div className={HowToCss.section}>
              <label className={HowToCss.headerlabel}>Log Page</label>
              <label className={HowToCss.label}>
                  The Log Page is where the magic happens!  Here, users will see an assortment of The
                  different food items that they have consumed for the day.  As you can see looking at image
                  to the right, we can observe a grid of many food item cards!  Each card indicates a food
                  item that a user has consumed for this given day.
              </label>
              <label className={HowToCss.label}>
                  As users include more and more food items, they will notice the calorie bar on the right of
                  the Log Page begin to change.  This bar indicates the amount of calories that a user has 
                  consumed for this given day.  As the day goes by, users should know observe the bar changing
                  as they consume their calories!
              </label>
                <label className={HowToCss.subheaderlabel}>Searching for an item</label>
                <label className={HowToCss.sublabel}>
                    One of the benefits of using <em>Daily Bites </em> is the ability to search for desired food items!
                    Located at the top, a search bar allows users to easily find food items that they have consumed.  Users
                    can search based on tag values or specific keywords to find a food item!
                </label>
                <label className={HowToCss.subheaderlabel}>Adding an item</label>
                <label className={HowToCss.sublabel}>
                    Once a user has located a food item, they can easily add it to their total daily calorie intake
                    by selecting on the <em> Add Food Item </em> button for that item.  Users will immediately notice
                    that the Log Page is update with that food item AND the calorie bar increasing as well.
                </label>
            </div>

            <div className={HowToCss.section}>
              <label className={HowToCss.headerlabel}>Account Page</label>
              <label className={HowToCss.label}>
                  The Account Page offers many extra resources to assist the users.  Its following pages include:
                  <li className={HowToCss.li}><em>My Account</em> - User Account Information</li>
                  <li className={HowToCss.li}><em>How-To</em> - Instructions for using Daily Bites</li>                  
                  <li className={HowToCss.li}><em>FAQs</em> - Frequently Asked Questions regarding Daily Bites</li>                  
                  <li className={HowToCss.li}><em>Settings</em> - ??</li>                  
                  <li className={HowToCss.li}><em>Logout</em> - Logs the user out and takes them to signin page</li>              
              </label>
            </div>
          </div>
        </div>
        <FeedbackForm />
    </div>
  )
}

export default HowTo