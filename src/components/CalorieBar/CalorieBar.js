import './CalorieBar.css';

const CalorieBar = ({currentCals, todaysItems, totalCalories}) => {
    const goal = totalCalories
    const over = (currentCals > goal)
    const rows = over ?  `0fr 1fr` : `${goal -currentCals}fr ${currentCals}fr`
    const style = {display: 'grid', gridTemplateRows: rows}
    var itemStyle = {display:'grid', backgroundColor: (over?'red': 'green'), color:(over?'white':'black') ,gridTemplateRows:''}
    const itemBoxs = []
    todaysItems.forEach((item) =>{
        itemStyle.gridTemplateRows += (item.nutrition[0].value > 75 ?`${item.nutrition[0].value}fr `: '20px ')
        itemBoxs.push(<div style={{border:'1px solid black', display:'flex', justifyContent:'space-between', alignContent:'center'}}>
            <span style={{maxHeight:'20px'}}>{item.name}:</span><span style={{maxHeight:'20px'}}>{item.nutrition[0].value}</span></div>)
    })
    
    return (
        <div className="bar-grid" key={currentCals}>
            <div className="CalorieDisplay">
                {currentCals} / {goal}
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