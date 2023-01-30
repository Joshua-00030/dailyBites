import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Log from './components/Log/Log';
import Account from './components/Account/Account';

function App() {
  return (
  <>
    <Navbar />
    <div className="app-container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/log" element={<Log />} />
      <Route path="/account" element={<Account />} />
    </Routes>
    </div>
  </>
  )
}

export default App;
