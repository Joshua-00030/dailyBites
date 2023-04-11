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
                  To begin, lets start by looking at the Home Page.
                  Here, the Home page provides users with a variety of different widgets that offer
                  unique functionality to the user!  This includes viewing calorie consumption data, 
                  calculating one's daily estimated calorie limit, and tracking their weight goals.  
                  The widgets are defined below:

                  <label className={HowToCss.subheaderlabel}>Bar-Chart History (Top-Left) </label>
                  <label className={HowToCss.sublabel}>
                  Selecting this widget will display the user's history in a bar graph.  
                  Users can then select the date range to view all food items that they have consumed 
                  throughout that time and how they have contributed towards their caloric intake.
                  </label>
                  <label className={HowToCss.subheaderlabel}>Pie-Chart History (Top-Right)</label>
                  <label className={HowToCss.sublabel}>
                  Selecting this widget will display the user's total food items in a pie chart graph.  
                  Users can then select the date range to view all food items that they have consumed 
                  throughout that time.
                  </label>
                  <label className={HowToCss.subheaderlabel}>Weight-BMI Graph (Bottom-Left)</label>
                  <label className={HowToCss.sublabel}>
                  Selecting this widget will display the user’s entered weights in the specified date range.  
                  Users can then select the date range to view all weights they have entered throughout that time.  
                  This helps the user keep track of their weights and compare them to the foods that were leading 
                  up to each weight entry. BMI will be displayed if the user has entered a height into their profile.
                  </label>
                  <label className={HowToCss.subheaderlabel}>Estimated Calorie Calculator (Bottom-Right)</label>
                  <label className={HowToCss.sublabel}>
                  Selecting this widget will display a form to the user. They can complete and submit the form to 
                  determine how many calories they should consume in a day.  This calculation is based on the 
                  formula provided by verywellfit.com.
                  </label>
              </label>
            </div>

            <div className={HowToCss.section}>
              <label className={HowToCss.headerlabel}>Log Page</label>
              <label className={HowToCss.label}>
                  The Log Page is where the magic happens!  Here, users will see an assortment of The
                  different food items that they have consumed for the day.  Users can take advantage
                  of many features here such as creating new food items, deleting/editing food items,
                  adding food items to their daily tracker, and searching for food items. 
              </label>
              <label className={HowToCss.label}>
                  As users include more and more food items, they will notice the calorie bar on the right of
                  the Log Page begin to change.  This bar indicates the amount of calories that a user has 
                  consumed for this given day.  As the day goes by, users should know observe the bar changing
                  as they consume their calories!
              </label>
              <label className={HowToCss.subheaderlabel}>Creating a new food item</label>
                <label className={HowToCss.sublabel}>
                    User's can create a new food item by selecting on the <em>New</em> button.  A pop-up box will be
                    displayed asking users to provide the nutrional information for a food item.  A food item must include
                    a name and calories.  The user can give it optional tag(s) and/or optional additional nutrional information.
                    Once done, select on the <em>Create Item</em> to successfully create the new food item and add it your account!
                </label>
                
                <label className={HowToCss.subheaderlabel}>Searching for a food item</label>
                <label className={HowToCss.sublabel}>
                    One of the benefits of using <em>Daily Bites </em> is the ability to search for desired food items!
                    Located at the top, a search bar allows users to easily find food items that they have consumed.  Users
                    can search based on tag values or specific keywords to find a food item!
                </label>

                <label className={HowToCss.subheaderlabel}>Sorting food items</label>
                <label className={HowToCss.sublabel}>
                    If a user desires to sort their food items by calories or name, they can do so!  Select on the <em>Select Sort By</em>
                    drop-down to reveal sort options.  User's will be able to sort by increasing or decreasing values of name or calories.
                </label>

                <label className={HowToCss.subheaderlabel}>Adding a food item to today's tracker</label>
                <label className={HowToCss.sublabel}>
                    Once a user has located a food item, they can easily add it to their total daily calorie intake
                    by simply selecting on the food-item button/container for that item.  Users will immediately notice
                    that the calorie tracker will update with that food item.  This data will be tracked into the users database.
                </label>

                <label className={HowToCss.subheaderlabel}>Removing a food item from today's tracker</label>
                <label className={HowToCss.sublabel}>
                    Observing the calorie bar-tracker, user's food items that they have consumed for the day will be displayed
                    with a corresponding X-button.  Selecing on the X-button (delete) will remove that food item from the user's 
                    daily calorie limit and update the graph.
                </label>

                <label className={HowToCss.subheaderlabel}>Editing a Food Item</label>
                <label className={HowToCss.sublabel}>
                    Select on the <em>Edit Items</em> checkbox button to enter edit mode.  Here, the users will notice a change
                    in color of the food boxes.  This is to indicate that the users are editing food items and not adding them.  
                    Select on the desired food item to edit.  This will cause a pop-up box to display containing the values of that
                    selected food item.  Users can then update the values and save the results!
                </label>

                <label className={HowToCss.subheaderlabel}>Deleting a Food Item</label>
                <label className={HowToCss.sublabel}>
                    Select on the <em>Edit Items</em> checkbox button to enter edit mode.  Here, the users will notice a change
                    in color of the food boxes.  This is to indicate that the users are editing food items and not adding them.  
                    Select on the desired food item to delete.  This will cause a pop-up box to display.  At the bottom, select 
                    on the <em>Delete</em> button to remove that food item from your account.  If the food item has been consumed
                    today or previously, it will remain in the users consumed-history for graphing purposes.
                </label>
                
            </div>

            <div className={HowToCss.section}>
              <label className={HowToCss.headerlabel}>Account Page</label>
              <label className={HowToCss.label}>
                  The Account Page offers many extra resources to assist the users.  Its following pages include:
                  <li className={HowToCss.li}><em>My Account</em> - User Account Information</li>
                  <li className={HowToCss.li}><em>How-To</em> - Instructions for using Daily Bites</li>                  
                  <li className={HowToCss.li}><em>FAQs</em> - Frequently Asked Questions regarding Daily Bites</li>                  
                  <li className={HowToCss.li}><em>Useful Links</em> - Additional resources regarding nutrition and counting calories.</li>                  
              </label>
            </div>
          </div>
        </div>
        <FeedbackForm />
    </div>
  )
}

export default HowTo