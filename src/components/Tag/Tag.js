import './Tag.css'
import { useState } from 'react';
import { IconContext } from "react-icons";
import { FaCheckSquare, FaSquare } from 'react-icons/fa';

const Tag = ({ type, label, activeTags, setActiveTags }) => {

    const [checked, setChecked] = useState(0);
    /*
    const handleClick = (e) => {
            //make active to nonactive
            if (e.target.classList.contains("active-tag")) {
                e.target.classList.remove("active-tag")
                e.target.classList.add("nonactive-tag")
                setChecked(0);
                const filterTags = activeTags.filter((value) => {
                    return value !== e.target.innerText;
                });
                setActiveTags(filterTags)
    
    
                //make nonactive to active
            } else {
                e.target.classList.add("active-tag")
                e.target.classList.remove("nonactive-tag")
                setChecked(1);
                setActiveTags(activeTags.concat(e.target.innerText))
            }
        }
    */
    const handleClick = (e) => {
        //make active to nonactive
        if (checked === 1) {
            setChecked(0);
            const filterTags = activeTags.filter((value) => {
                return value !== e.target.innerText;
            });
            setActiveTags(filterTags)
            //make nonactive to active
        } else {
            setChecked(1);
            setActiveTags(activeTags.concat(e.target.innerText))
        }
    }

    const handleAdd = (e) => {

    }

    return (
        <div
            onClick={type === "tag-bar" ? handleClick : handleAdd}
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