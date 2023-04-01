import './Tag.css'
import { useState } from 'react';
import { IconContext } from "react-icons";
import { FaCheckSquare, FaSquare } from 'react-icons/fa';

const Tag = ({ label, activeTags, setActiveTags, favoriteTags }) => {

    const [checked, setChecked] = useState(0);

    const handleClick = (e) => {
        //make active to nonactive
        if (checked === 1) {
            setChecked(0);
            const filterTags = favoriteTags.filter((value) => {
                return value !== e.target.innerText;
            });
            setActiveTags(filterTags)
            //make nonactive to active
        } else {
            setChecked(1);
            setActiveTags(activeTags.concat(e.target.innerText))
        }
        console.log(e.target.innerText)
        console.log('favorites:' + favoriteTags)
        console.log('actives:' + activeTags)
    }

 

    return (
        <div
            onClick={handleClick}
            className="tag-button">
            <div className="tag-label">
                {label}
            </div>
            <div className="tag-check-icon">
                {checked === 1 ? (
                    <IconContext.Provider value={{ className: "check-wrapper", size: "1em" }}>
                        <FaCheckSquare />
                    </IconContext.Provider>)
                    : (<IconContext.Provider value={{ className: "check-wrapper", size: "1em" }}>
                        <FaSquare />
                    </IconContext.Provider>)
                }
            </div>
        </div>
    )
}

export default Tag