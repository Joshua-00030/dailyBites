import './App.css';

import { Routes, Route } from "react-router-dom";
import MenuBar from './components/MenuBar/MenuBar';
import DashBoard from './components/DashBoard/DashBoard';
import CalorieLog from './components/CalorieLog/CalorieLog';
import Account from './components/Account/Account';

function App() {
  return (
  <>
    <MenuBar></MenuBar>
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/log" element={<CalorieLog />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  </>
  );
}

export default App;
