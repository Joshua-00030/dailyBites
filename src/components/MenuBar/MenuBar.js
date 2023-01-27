import './MenuBar.css';

import { Link } from "react-router-dom";

const MenuBar = (props) => {
    return (
        <div className="MenuBar">
            <Link to="/">
                <button className="MenuButton">Dashboard</button>
            </Link>
            <Link to="/log">
                <button className="MenuButton">Log</button>
            </Link>
            <div>
                <h1>Daily Bites</h1>
                <p>Hello, {props.username}</p>
            </div>
            <Link to="/account">
                <button className="MenuButton">Account</button>
            </Link>
            <Link to="/login">
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