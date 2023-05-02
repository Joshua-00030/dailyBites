import './CalorieBar.css';
import CalorieBarItem from '../CalorieBarItem/CalorieBarItem';
import { useEffect } from 'react';

const CalorieBar = ({ currentCals, todaysItems, totalCals, setCurrentCals }) => {
    const goal = totalCals
    const over = (currentCals > goal)
    const rows = over ? `0fr 1fr` : `${goal - currentCals}fr ${currentCals}fr`
    const style = { display: 'grid', gridTemplateRows: rows }
    var itemStyle = { display: 'grid', backgroundColor: (over ? 'red' : 'green'), color: (over ? 'white' : 'black'), gridTemplateRows: '' }
    const itemBoxs = []



    todaysItems.forEach((item, i) => {
        itemStyle.gridTemplateRows += (item.nutrition[0].value > 75 ? `${item.nutrition[0].value}fr ` : '20px ')
        itemBoxs.push(
            <CalorieBarItem item={item} id={i} setCurrentCals={setCurrentCals} height={(item.nutrition[0].value > 75 ? `${item.nutrition[0].value}fr ` : '20px ')}/>
        )
    })

    return (
        <div className="bar-grid" key={currentCals}>
            <div className="CalorieDisplay">
                {currentCals} / {totalCals}
            </div>
            <div className="CalorieBar" style={style}>
                <div></div>
                <div style={itemStyle}>
                    {itemBoxs}
                </div>
            </div>
        </div>
    )
}

export default CalorieBar