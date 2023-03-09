import './CalorieBar.css';

const CalorieBar = ({currentCals, totalCals}) => {
    return (
        <div className="bar-grid">
            <div className="CalorieDisplay">
                {currentCals} / {totalCals}
            </div>
            <div className="CalorieBar">
            </div>
        </div>
    )
}

export default CalorieBar