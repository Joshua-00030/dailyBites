import './MenuBar.css';

import { Link } from "react-router-dom";

const MenuBar = () => {
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
            </div>
            <Link to="/account">
                <button className="MenuButton">Account</button>
            </Link>
        </div>
    )
  }
  
  export default MenuBar