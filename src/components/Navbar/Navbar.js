import './Navbar.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaUser, FaUtensils, FaSignOutAlt, FaPen, FaMarker, FaHamburger, FaExpandArrowsAlt, FaEraser, FaChartPie, FaCarrot, FaUserCircle, FaWindowClose, FaRegWindowClose, FaSignInAlt, FaPlusSquare, FaPlus, FaPortrait, FaHome, FaEdit, FaSearch } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Navbar = (props) => {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Daily Bites
            </Link>
                <ul>
                    <CustomLink to="/">
                    <IconContext.Provider value={{ size: "1.5rem", className: "" }}>
                    <FaHome />
                    </IconContext.Provider>
                    </CustomLink>
                    <CustomLink to="/log">Log</CustomLink>
                </ul>
                <ul>
                    <CustomLink to="/account">
                    <IconContext.Provider value={{ size: "1.5rem", className: "" }}>
                        <FaUserCircle />
                        </IconContext.Provider>
                        </CustomLink>

                    <CustomLink onClick={props.logout} to="/login">
                    <IconContext.Provider value={{ size: "1.5rem", className: "" }}>
                    <FaSignOutAlt />
                    </IconContext.Provider>
                    </CustomLink>
                </ul>
        </nav>
    )
  }

  const CustomLink = ({to, children, ...props}) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch( {path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
  }

  export default Navbar