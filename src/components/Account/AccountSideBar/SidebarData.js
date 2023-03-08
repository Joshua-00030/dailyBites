import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faBook, faLink, faQuestion} from '@fortawesome/free-solid-svg-icons'; 

export const SidebarData = [
    {
        title: "My Account",
        icon: <FontAwesomeIcon icon={faEye}/> ,
        link: "/account/info",
        cName: 'nav-text'
    },
    {
        title: "How-To",
        icon: <FontAwesomeIcon icon={faBook}/> ,
        link: "/account/howto",
        cName: 'nav-text'
    },
    {
        title: "FAQs",
        icon: <FontAwesomeIcon icon={faQuestion}/> ,
        link: "/account/faqs",
        cName: 'nav-text'
    },
    {
        title: "Useful Links",
        icon: <FontAwesomeIcon icon={faLink}/> ,
        link: "/account/usefullinks",
        cName: 'nav-text'
    }
]