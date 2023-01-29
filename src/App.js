import './App.css';

import { Routes, Route, redirect, Navigate } from "react-router-dom";
import MenuBar from './components/MenuBar/MenuBar';
import DashBoard from './components/DashBoard/DashBoard';
import CalorieLog from './components/CalorieLog/CalorieLog';
import Account from './components/Account/Account';
import { useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {

  const [user, setUser] = useState({name: "" , email: ""})

  function login(details) {
    console.log(details)
    setUser({...user, name: details.username});
  }

  function logout() {
    setUser({...user, name: ""});
  }

  if (user.name === "") {
    return <LoginForm Login={login}/>
  }

  return (
    <div>
      <MenuBar username={user.name} logout={logout}/>
      <Routes>
        <Route path="/log" element={<CalorieLog />} />
        <Route path="/account" element={<Account />} />
        <Route path="/dashboard" element={<DashBoard />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
