import React, { useState } from 'react'
import "../Account.css"
import { SidebarData } from './SidebarData'
import { Link } from "react-router-dom";


const AccountSideBar = (props) => {

  return (

    <div>
        <ul className='side-menu-items'>
          {SidebarData.map((val, key) => {
            return ( 
              <li key={key} className={val.cName}>
                <Link 
                  to={val.link} 
                  onClick={(val.title === "Logout") ? props.logout 
                    : (() => {
                      props.toggle()
                    })}>
                  {val.icon}
                  <span>{val.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
    </div>
  )
}

export default AccountSideBar