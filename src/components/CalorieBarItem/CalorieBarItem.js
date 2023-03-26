import './CalorieBarItem.css';
import { FaEdit } from 'react-icons/fa';
import { IconContext } from "react-icons";

const CalorieBarItem = ({ name, calories }) => {
return (
    
    <div className="calorie-bar-item-container">
        <div>{name}</div>
        <div>{calories} calories</div>
        <div className="qty-icon-container">
        <IconContext.Provider value={{ className: "nutrient-edit-icon", size: "1.5em" }}>
                <FaEdit />
            </IconContext.Provider>
            <div>quantity</div>
            </div>
    </div>
    
)
}

export default CalorieBarItem;