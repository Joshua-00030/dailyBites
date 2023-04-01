import './Navbar.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaSignOutAlt, FaUserCircle, FaHome } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Navbar = (props) => {
    return (
        <nav className="nav">
            <Link to="/home" className="site-title">
                Daily Bites
            </Link>
            <ul>
                <CustomLink to="/home">
                    <IconContext.Provider value={{ className: "nav-icon" }}>
                        <FaHome />
                    </IconContext.Provider>
                </CustomLink>
                <CustomLink to="/">Log</CustomLink>
            </ul>
            <ul>
                <CustomLink to="/account">
                    <IconContext.Provider value={{ className: "nav-icon" }}>
                        <FaUserCircle />
                    </IconContext.Provider>
                </CustomLink>

                <CustomLink onClick={props.logout} to="/login">
                    <IconContext.Provider value={{ className: "nav-icon" }}>
                        <FaSignOutAlt />
                    </IconContext.Provider>
                </CustomLink>
            </ul>
        </nav>
    )
}

const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar