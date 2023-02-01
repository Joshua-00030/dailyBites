import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'; 

export const SidebarData = [
    {
        title: "Account Information",
        icon: <FontAwesomeIcon icon={faEye}/> ,
        link: "/account/info"
    },
    {
        title: "Settings",
        icon: <FontAwesomeIcon icon={faEye}/> ,
        link: "/account/settings"
    },
    {
        title: "Logout",
        icon: <FontAwesomeIcon icon={faEye}/> ,
        link: "/",
    }
]