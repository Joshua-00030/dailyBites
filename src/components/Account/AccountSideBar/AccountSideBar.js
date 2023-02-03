import React, { useState } from 'react'
import "../Account.css"
import { SidebarData } from './SidebarData'
import { Link, useMatch, useResolvedPath} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

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
        {/* <ul className='SidebarList'>
        {SidebarData.map((val, key) => {
            return (
              <CustomLink 
                key={key}
                to={val.link} 
                style={{ textDecoration: 'none' }}
                className="row"
                onClick={(val.title === "Logout") ? props.logout : null}> 
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
                </CustomLink>
            )
        })}
        </ul> */}
    </div>
  )
}

const CustomLink = ({to, children, ...props}) => {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch( {path: resolvedPath.pathname, end: true})

  return (
      <li className={isActive ? "SideBarList text" : ""}>
          <Link to={to} {...props}>
              {children}
          </Link>
      </li>
  )
}

export default AccountSideBar