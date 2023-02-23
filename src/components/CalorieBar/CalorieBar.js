import './CalorieBar.css';

const CalorieBar = ({currentCals}) => {
    return (
        <div className="bar-grid">
            <div className="CalorieDisplay">
                {currentCals}
            </div>
            <div className="CalorieBar">
            </div>
        </div>
    )
}

export default CalorieBar