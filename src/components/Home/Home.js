import './Home.css';
import { useEffect, useState } from 'react';
import { FaCalculator, FaWeight, FaRegChartBar, FaChartPie } from 'react-icons/fa';
import { IconContext } from "react-icons";
import FoodPieChart from '../FoodPieChart/foodPieChart';
import FoodGraphChart from '../FoodGraphChart/foodGraphChart';
import userService from '../../services/users';
import CalWidget from '../CalCalcWidget/CalWidget';
import WeightGraph from '../WeightGraph/WeightGraph';

const Home = ({ user }) => {

    const [selectedWidget, setSelectedWidget] = useState(0);
    const [view, setView] = useState('0');
    const [dailyData, setDailyData] = useState(null)
    const [weightData, setWeightData] = useState(null)
    const [dateRange, setDateRange] = useState({
        sd: new Date(new Date().setHours(-24 * 7, 0, 0, 0)).toISOString().split('T')[0],
        ed: new Date(new Date().setHours(0, 0, 0, 0)).toISOString().split('T')[0]
    })

    useEffect(() => {
        const sdate = new Date(new Date(dateRange.sd).setMinutes(new Date(dateRange.sd).getTimezoneOffset()))
        const edate = new Date(new Date(dateRange.ed).setMinutes(new Date(dateRange.ed).getTimezoneOffset())).setHours(23, 59, 59, 999)
        if (selectedWidget < 2) {
            userService.getHistory({ sdate: new Date(sdate), edate: new Date(edate) }).then(items =>
                setDailyData(items))
        } else if (selectedWidget === 3) {
            userService.getWeightHistory({ sdate: new Date(sdate), edate: new Date(edate) }).then(res =>
                setWeightData(res))
        }
    }, [dateRange.ed, dateRange.sd, selectedWidget])

    const handleWidgetClick = (value) => {
        setSelectedWidget(value);
    }

    const widgetList = [
        <FoodGraphChart className={"home-main-container"} data={dailyData} view={view} units={user.trackedNutrients} />,
        <FoodPieChart className={"home-main-container"} data={dailyData} view={view} units={user.trackedNutrients} />,
        <CalWidget />,
        <WeightGraph data={weightData} height={user.height}/>]

    return (
        <div className="home-page-container">
            <div className="home-grid-container">
                <div className="home-main-container">
                    {selectedWidget === 2 ? "" : <div>
                        <label htmlFor="start">Start date:</label>
                        <input type="date" id="start" name="trip-start" value={dateRange.sd} onChange={(event) => setDateRange({ sd: event.target.value, ed: dateRange.ed })} />
                        <br />
                        <label htmlFor="end">End date: </label>
                        <input type="date" id="end" name="trip-end" value={dateRange.ed} onChange={(event) => setDateRange({ sd: dateRange.sd, ed: event.target.value })} />
                        {selectedWidget > 2 ? "" :
                            <>
                                <br />
                                <select name="view" id="view" onChange={(e) => setView(e.target.value)}>
                                    <option value="0">Calories</option>
                                    <option value="1">Nutrients</option>
                                </select>
                            </>
                        }
                    </div>}
                    {widgetList[selectedWidget]}
                </div>

                <div className="home-widget-grid">
                    <div></div>
                    <div className={selectedWidget == 0 ? "home-widget-selected" : "home-widget" } onClick={() => handleWidgetClick(0)}>
                        <IconContext.Provider value={selectedWidget == 0 ? { className: "home-widget-icon-selected" } : { className: "home-widget-icon" }}>
                            <FaRegChartBar />
                        </IconContext.Provider>
                    </div>
                </div>

                <div className="home-widget-grid">
                    <div className={selectedWidget == 1 ? "home-widget-selected" : "home-widget" } onClick={() => handleWidgetClick(1)}>
                        <IconContext.Provider value={selectedWidget == 1 ? { className: "home-widget-icon-selected" } : { className: "home-widget-icon" }}>
                            <FaChartPie />
                        </IconContext.Provider>
                    </div>
                    <div></div>
                </div>

                <div className="home-widget-grid">
                    <div></div>
                    <div className={selectedWidget == 3 ? "home-widget-selected" : "home-widget" } onClick={() => handleWidgetClick(3)}>
                        <IconContext.Provider value={selectedWidget == 3 ? { className: "home-widget-icon-selected" } : { className: "home-widget-icon" }}>
                            <FaWeight />
                        </IconContext.Provider>
                    </div>
                </div>

                <div className="home-widget-grid">
                    <div className={selectedWidget == 2 ? "home-widget-selected" : "home-widget" } onClick={() => handleWidgetClick(2)}>
                        <IconContext.Provider value={selectedWidget == 2 ? { className: "home-widget-icon-selected" } : { className: "home-widget-icon" }}>
                            <FaCalculator />
                        </IconContext.Provider>
                    </div>
                    <div></div>

                </div>
            </div>
        </div>
    )
}

export default Home

