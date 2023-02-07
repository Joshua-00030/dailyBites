import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faGears, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'; 

export const SidebarData = [
    {
        title: "My Account",
        icon: <FontAwesomeIcon icon={faEye}/> ,
        link: "/account/info",
        cName: 'nav-text'
    },
    {
        title: "Settings",
        icon: <FontAwesomeIcon icon={faGears}/> ,
        link: "/account/settings",
        cName: 'nav-text'
    },
    {
        title: "Logout",
        icon: <FontAwesomeIcon icon={faRightFromBracket}/> ,
        link: "/",
        cName: 'nav-text'
    }
]