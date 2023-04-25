import './CalorieBarItem.css';
import { FaRegWindowClose, FaTimes } from 'react-icons/fa';
import { IconContext } from "react-icons";
import userServices from "../../services/users"

const CalorieBarItem = ({ item, items, setCurrentCals, id, height }) => {


    const deleteTxt = "Remove " + item.name
    const handleDelete = async (e) => {
        //e.preventDefault()
        await userServices.deleteItemFromToday(e)
        setCurrentCals(c=>c+1)

    }

    return (
        <div className="calorie-item-border">
            <div className="calorie-item-container" id={id}>

                <div style={{  display: 'flex', marginLeft: '.25rem', alignContent: 'flex-start', maxHeight: height }}>
                    {item.name}
                   {/* maxHeight: '20px' */}
                </div>
                <div style={{ display: 'flex', marginLeft: '.25rem', marginRight: '.25rem', justifyContent: 'flex-end', maxHeight: height }}>
                    
                    <span>{item.nutrition[0].value}</span>
                </div>
                <div style={{  height:'100%', display:'flex', justifyContent: 'flex-end', maxHeight: height}}>
                    <span onClick={(e) => handleDelete({ id: item.itemId, date: item.date })}>
                        <IconContext.Provider value={{ className: "delete-cal-bar-item", size: "1.4em" }}>
                            <FaRegWindowClose title={deleteTxt}/>
                        </IconContext.Provider></span>
                    {(item.nutrition[0].value > 100 ? <br /> : <></>)}
                    
                </div>
                </div>
            </div>

    )
}

export default CalorieBarItem;