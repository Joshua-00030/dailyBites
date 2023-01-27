import './App.css';

import { Routes, Route, redirect } from "react-router-dom";
import MenuBar from './components/MenuBar/MenuBar';
import DashBoard from './components/DashBoard/DashBoard';
import CalorieLog from './components/CalorieLog/CalorieLog';
import Account from './components/Account/Account';
import { useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm';

function App() {

  const [user, setUser] = useState({name: "" , email: ""})

  function login(details) {
    console.log(details)
    setUser({...user, name: details.username})
    redirect("/")
  }

  function logout() {
    setUser({...user, name: ""})
    redirect("/login")
  }

  return (
  <>
    {(user.name === "") ? 
    <LoginForm Login={login} /> 
    : 
    <div>
      <MenuBar username={user.name} logout={logout}/>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/log" element={<CalorieLog />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
    }
  </>
  );
}

export default App;
