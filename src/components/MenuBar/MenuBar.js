import './MenuBar.css';

import { Link } from "react-router-dom";

const MenuBar = (props) => {
    return (
        <div className="MenuBar">
            <Link to="/dashboard">
                <button className="MenuButton">Dashboard</button>
            </Link>
            <Link to="/log">
                <button className="MenuButton">Log</button>
            </Link>
            <div>
                <h1>Daily Bites - Welcome {props.username}</h1>
            </div>
            <Link to="/account">
                <button className="MenuButton">{props.username} Account</button>
            </Link>
            <Link to="/">
                <button 
                    onClick={() => {
                        props.logout()
                    }}
                    className="MenuButton">Logout</button>
            </Link>
        </div>
    )
  }
  
  export default MenuBar