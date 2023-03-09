import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Log from './components/Log/Log';
import Account from './components/Account/Account';
import AccountInfo from './components/Account/AccountSideBar/AccountInfo';
import { useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import HowTo from './components/Account/AccountSideBar/HowTo';
import FAQs from './components/Account/AccountSideBar/FAQs';
import UsefulLinks from './components/Account/AccountSideBar/UsefulLinks';

function App() {

  const [user, setUser] = useState(
    {
      name: "",
      password: "",
      cPassword: "",
      email: ""
    })

  function login(details) {
    console.log(details)
    setUser({ name: details.username, email: details.email });

  }

  function logout() {
    // <Navigate to="/" replace={true} />
    setUser({ ...user, name: "" });
  }

  if (user.name === "") {
    return <LoginForm Login={login} setUser={setUser} />
  } else {

    return (
    <>
      <Navbar logout={logout} />
      <div className='app-container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log" element={<Log user={user}/>} />
        <Route path="/account" element={<Account user={user}/>}>
          <Route index element={<AccountInfo user={user} />}/>
          <Route path="info" element={<AccountInfo user={user} /> } />
          <Route path="howto" element={<HowTo />}/>
          <Route path="faqs" element={<FAQs />} />
          <Route path="usefullinks" element={<UsefulLinks />} />
        </Route>
      </Routes>
      </div>
    </>
    )
  }
}

export default App;
