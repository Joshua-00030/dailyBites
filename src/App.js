import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Log from './components/Log/Log';
import Account from './components/Account/Account';
import AccountInfo from './components/Account/AccountSideBar/AccountInfo';
import AccountSettings from './components/Account/AccountSideBar/AccountSettings';
import { useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import PageNotFound from './components/PageNotFound/PageNotFound';
import HowTo from './components/Account/AccountSideBar/HowTo';
import FAQs from './components/Account/AccountSideBar/FAQs';

function App() {

  const [user, setUser] = useState(
    {name: "", 
    password: "", 
    cPassword: "", 
    email: ""
  })

  function login(details) {
    console.log(details)
    setUser({name: details.username, email: details.email});
    
  }

  function logout() {
    // <Navigate to="/" replace={true} />
    setUser({...user, name: ""});
  }

  if (user.name === "") {
    return <LoginForm Login={login}/>
  } else {
 
    return (
    <>
      <Navbar />
      <div className='app-container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log" element={<Log />} />
        <Route path="/account" element={<Account logout={logout} user={user}/>}>
          <Route index element={<AccountInfo user={user.name} email={user.email} />}/>
          <Route path="info" element={<AccountInfo user={user.name} email={user.email}/> } />
          <Route path="howto" element={<HowTo />}/>
          <Route path="faqs" element={<FAQs />} />
          <Route path="settings" element={<AccountSettings />} />
        </Route>
      </Routes>
      </div>
    </>
    )
  }
}

export default App;
