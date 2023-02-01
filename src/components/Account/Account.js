import './Account.css';
import AccountSideBar from './AccountSideBar/AccountSideBar'
import { Outlet } from 'react-router-dom';

const Account = (props) => {
    console.log(props.user)

    return (
        <div className='account-container'>
            <div className='sidebar'>
                <AccountSideBar logout={props.logout} user={props.user}/>
            </div>
            <div className='infoArea'>
                <Outlet />
            </div>
        </div>
    )
  }
  
  export default Account