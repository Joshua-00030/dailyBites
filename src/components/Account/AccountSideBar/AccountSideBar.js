import React from 'react'
import "../Account.css"
import { SidebarData } from './SidebarData'
import { Link, useMatch, useResolvedPath} from "react-router-dom";


const AccountSideBar = (props) => {
  console.log(props.user)
  return (
    <div>
        <ul className='SidebarList'>
        {SidebarData.map((val, key) => {
            return (
              <Link 
                key={key}
                to={val.link} 
                style={{ textDecoration: 'none' }}>
                <li 
                  key={key} 
                  className="row"
                  onClick={(val.title === "Logout") ? props.logout : null}> 
                    <div id="icon">{val.icon}</div>
                    <div id="title">{val.title}</div>
                </li>
                </Link>
            )
        })}
        </ul>
    </div>
  )
}

{/* <ul>
<CustomLink onClick={props.logout} to="/login">Logout</CustomLink>
</ul> */}


export default AccountSideBar