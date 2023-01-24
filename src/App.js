import './App.css';
import CalorieBar from './components/CalorieBar';
import CalorieDisplay from './components/CalorieDisplay';
import ItemBar from './components/ItemBar';
import ItemContainer from './components/ItemContainer';
import MenuBar from './components/MenuBar';
function App() {
  return (
  <>
    <MenuBar></MenuBar>
    <div className='Dashboard'>
      <ItemBar></ItemBar>
      <CalorieDisplay></CalorieDisplay>
      <ItemContainer></ItemContainer>
      <CalorieBar></CalorieBar>
    </div>
  </>
  );
}

export default App;
