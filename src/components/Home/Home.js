import './Home.css';
import { useState } from 'react';
import { FaRegCalendarAlt, FaWeight, FaRegChartBar, FaChartPie } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Home = () => {

    const [selectedWidget, setSelectedWidget] = useState(0);

    const handleWidgetClick = (value) => {
        setSelectedWidget(value);
    }

    return (
        <div className="home-page-container">
            <div className="home-grid-container">
                <div className="home-main-container">
                    Widget {selectedWidget}
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

