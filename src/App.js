import './App.css';
import CalorieBar from './components/CalorieBar';
import ItemContainer from './components/ItemContainer';
import MenuBar from './components/MenuBar';
function App() {
  return (
  <>
    <MenuBar></MenuBar>
    <div className='Dashboard'>
      <ItemContainer></ItemContainer>
      <CalorieBar></CalorieBar>
    </div>
  </>
  );
}

export default App;
