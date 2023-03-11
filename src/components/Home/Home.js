import './Home.css';
import { useEffect, useState } from 'react';
import { FaRegCalendarAlt, FaWeight, FaRegChartBar, FaChartPie } from 'react-icons/fa';
import { IconContext } from "react-icons";
import FoodPieChart from '../FoodPieChart/foodPieChart';
import userService from '../../services/users'

const Home = () => {

    const [selectedWidget, setSelectedWidget] = useState(0);
    const [dailyData, setDailyData] = useState(null)
    const [dateRange, setDateRange] = useState({sd: new Date().toISOString().split('T')[0], ed: new Date().toISOString().split('T')[0]})

    useEffect(() => {
        const sdate = new Date(new Date(dateRange.sd).setMinutes(new Date(dateRange.sd).getTimezoneOffset()))
        const edate = new Date(new Date(dateRange.ed).setMinutes(new Date(dateRange.ed).getTimezoneOffset())).setHours(23, 59, 59, 999)
        userService.getHistory({ sdate: new Date(sdate), edate: new Date(edate) }).then(items =>
            setDailyData(items))
    }, [dateRange.ed, dateRange.sd])
    
    const handleWidgetClick = (value) => {
        setSelectedWidget(value);
    }
    const widgetList = [
        <div>Widget {selectedWidget}</div>,
        <FoodPieChart className={"home-main-container"} data={dailyData} />,
        <div>Widget {selectedWidget}</div>,
        <div>Widget {selectedWidget}</div>]
    return (
        <div className="home-page-container">
            <div className="home-grid-container">
                <div className="home-main-container">
                    <div>

                        <label for="start">Start date:</label>
                        <input type="date" id="start" name="trip-start" value={dateRange.sd} onChange={(event) => setDateRange({ sd: event.target.value, ed: dateRange.ed })} />
                        <br />
                        <label for="end">End date: </label>
                        <input type="date" id="end" name="trip-end" value={dateRange.ed} onChange={(event) => setDateRange({ sd: dateRange.sd, ed: event.target.value })} />
                    </div>
                    {widgetList[selectedWidget]}
                </div>

                <div className="home-widget-grid">
                    <div></div>
                    <div className="home-widget" onClick={() => handleWidgetClick(0)}>
                        <IconContext.Provider value={{ className: "home-widget-icon" }}>
                            <FaRegChartBar />
                        </IconContext.Provider>
                    </div>
                </div>

                <div className="home-widget-grid">
                    <div className="home-widget" onClick={() => handleWidgetClick(1)}>
                        <IconContext.Provider value={{ className: "home-widget-icon" }}>
                            <FaChartPie />
                        </IconContext.Provider>
                    </div>
                    <div></div>
                </div>

                <div className="home-widget-grid">
                    <div></div>
                    <div className="home-widget" onClick={() => handleWidgetClick(2)}>
                        <IconContext.Provider value={{ className: "home-widget-icon" }}>
                            <FaWeight />
                        </IconContext.Provider>
                    </div>
                </div>

                <div className="home-widget-grid">
                    <div className="home-widget" onClick={() => handleWidgetClick(3)}>
                        <IconContext.Provider value={{ className: "home-widget-icon" }}>
                            <FaRegCalendarAlt />
                        </IconContext.Provider>
                    </div>
                    <div></div>

                </div>
            </div>
        </div>
    )
}

export default Home

