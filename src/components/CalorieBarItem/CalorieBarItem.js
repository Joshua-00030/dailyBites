import './CalorieBarItem.css';
import { FaRegWindowClose, FaEdit } from 'react-icons/fa';
import { IconContext } from "react-icons";
import userServices from "../../services/users"

const CalorieBarItem = ({ item, items, setCurrentCals, id }) => {

    const handleDelete = async (e) => {
        //e.preventDefault()
        await userServices.deleteItemFromToday(e)
        setCurrentCals(c=>c+1)

    }

    return (
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }} id={id}>

                <div style={{ borderBottom: '1px solid black', display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                    <span style={{ maxHeight: '20px' }}>{item.name}:</span>
                    <span style={{ maxHeight: '20px' }}>{item.nutrition[0].value}</span>
                </div>
                <div style={{ borderBottom: '1px solid black', height:'100%', display:'flex', justifyContent:'space-evenly' }}>
                    <span style={{ maxHeight: '20px' }} onClick={(e) => handleDelete({ id: item.itemId, date: item.date })}>
                        <IconContext.Provider value={{ className: "", size: "1.4em" }}>
                            <FaRegWindowClose />
                        </IconContext.Provider></span>
                    {(item.nutrition[0].value > 100 ? <br /> : <></>)}
                    <span style={{ maxHeight: '20px' }}>
                        <IconContext.Provider value={{ className: "", size: "1.4em" }}>
                            <FaEdit />
                        </IconContext.Provider></span>
                </div>
            </div>

    )
}

export default CalorieBarItem;