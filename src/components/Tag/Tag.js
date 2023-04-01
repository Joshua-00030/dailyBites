import './Tag.css'
import { useState } from 'react';
import { IconContext } from "react-icons";
import { FaCheckSquare, FaSquare } from 'react-icons/fa';

const Tag = ({ label, activeTags, setActiveTags }) => {

    const [checked, setChecked] = useState(false);

    const handleClick = (e) => {
        //make active to nonactive
        if (checked) {
            setChecked(c => ! c);
            const filterTags = activeTags.filter((value) => {
                return value !== label;
            });
            setActiveTags(filterTags)
            //make nonactive to active
        } else {
            setChecked(c => !c);
            setActiveTags(activeTags.concat(label))
        }
    }


    return (
        <div
            onClick={handleClick}
            className="tag-button">
            <div className="tag-label">
                {label}
            </div>
            <div className="tag-check-icon">
                {checked ? (
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