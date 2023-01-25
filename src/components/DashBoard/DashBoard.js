import './DashBoard.css';

import CalorieBar from './../CalorieBar/CalorieBar';
import CalorieDisplay from './../CalorieDisplay/CalorieDisplay';
import ItemBar from './../ItemBar/ItemBar';
import ItemContainer from './../ItemContainer/ItemContainer';

const DashBoard = () => {
    return (
        <div className="Dashboard">
            <ItemBar></ItemBar>
      <CalorieDisplay></CalorieDisplay>
      <ItemContainer></ItemContainer>
      <CalorieBar></CalorieBar>
        </div>
    )
  }
  
  export default DashBoard

