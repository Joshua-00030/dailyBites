import './Home.css';
import CalorieBar from '../CalorieBar/CalorieBar';
import CalorieDisplay from '../CalorieDisplay/CalorieDisplay';
import ItemBar from '../ItemBar/ItemBar';
import ItemContainer from '../ItemContainer/ItemContainer';

const Home = () => {
    return (
        <div className="home-container">
            <ItemBar></ItemBar>
            <CalorieDisplay></CalorieDisplay>
            <ItemContainer></ItemContainer>
            <CalorieBar></CalorieBar>
        </div>
    )
  }
  
  export default Home

