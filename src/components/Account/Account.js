import './Account.css';
import AccountSideBar from './AccountSideBar/AccountSideBar'
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

const Account = (props) => {
    console.log(props.user)

    const [isOpen, setIsOpen] = useState(false);

    function toggleSideBar() {
      return setIsOpen(!isOpen)
    }
  
    return (
      <>
      <div className='account-container'>
        <div>
          <div className={isOpen ? 'bars active' : 'bars'}>
              <Link to="#" className='menu-bars'>
                <FontAwesomeIcon icon={faBars} onClick={toggleSideBar}/>
              </Link>
          </div>
          <div className={isOpen ? 'sidebar active' : "sidebar disabled"}>
                <AccountSideBar logout={props.logout} toggle={toggleSideBar}/>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      </>
    )
  }
  
  export default Account