import './Home.css';
import { useEffect, useState } from 'react';
import { FaRegCalendarAlt, FaWeight, FaRegChartBar, FaChartPie } from 'react-icons/fa';
import { IconContext } from "react-icons";
import FoodPieChart from '../FoodPieChart/foodPieChart';
import userService from '../../services/users'

const Home =  () => {

    const [selectedWidget, setSelectedWidget] = useState(0);
    const [dailyData, setDailyData] = useState(null)
    
    useEffect(() => {
        const sdate = new Date()
        sdate.setHours(0,0,0,0)
        const edate = new Date()
        edate.setHours(23, 59, 59, 999)
        userService.getHistory({sdate:new Date(sdate), edate:new Date(edate)}).then(items=>
        setDailyData(items))
    },[])
    const handleWidgetClick = (value) => {
        setSelectedWidget(value);
    }
    const widgetList = [
        <div>Widget {selectedWidget}</div>,
        <FoodPieChart className={"home-main-container"} data={dailyData}/>,
        <div>Widget {selectedWidget}</div>,
        <div>Widget {selectedWidget}</div>]
    return (
        <div className="home-page-container">
            <div className="home-grid-container">
                <div className="home-main-container">
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

