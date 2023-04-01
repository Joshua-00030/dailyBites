import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home/Home';
import Log from './components/Log/Log';
import Account from './components/Account/Account';
import AccountInfo from './components/Account/AccountSideBar/AccountInfo';
import { useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import HowTo from './components/Account/AccountSideBar/HowTo';
import FAQs from './components/Account/AccountSideBar/FAQs';
import UsefulLinks from './components/Account/AccountSideBar/UsefulLinks';
import WithNav from './components/WithNav';
import WithoutNav from './components/WithoutNav';

function App() {

  const [user, setUser] = useState(
    {
      name: null,
      password: null,
      cPassword: null,
      email: null
    })
/*
  function login(details) {
    console.log(details)
    setUser({ name: details.username, email: details.email });

  }
*/
  function logout() {
    setUser({ ...user, name: null });
    <Navigate to="/login" replace={true} />
  }

    return (
    <>
    {/*
      <Navbar logout={logout} />
      <div className='app-container'>
      <Routes>
        <Route path="/" element={<Log user={user}/>} /> 
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/account" element={<Account user={user}/>} >
          <Route index element={<AccountInfo user={user} />}/>
          <Route path="info" element={<AccountInfo user={user} /> } />
          <Route path="howto" element={<HowTo />}/>
          <Route path="faqs" element={<FAQs />} />
          <Route path="usefullinks" element={<UsefulLinks />} />
        </Route>
      </Routes>
      </div>
    */}
    <Routes>
        <Route element={<WithoutNav />}>
        <Route path="/login" element={<LoginForm setUser={setUser}/>} />
        </Route>
        <Route element={<WithNav logout={logout}/>}>
        <Route path="/" element={user.name === null ? <Navigate to='/login'/> : <Log user={user}/>} /> 
        <Route path="/home" element={user.name === null ? <Navigate to='/login'/> : <Home />} />
        <Route path="/account" element={user.name === null ? <Navigate to='/login'/> : <Account user={user}/>} >
          <Route index element={<AccountInfo user={user} />}/>
          <Route path="info" element={<AccountInfo user={user} /> } />
          <Route path="howto" element={<HowTo />}/>
          <Route path="faqs" element={<FAQs />} />
          <Route path="usefullinks" element={<UsefulLinks />} />
        </Route>
        </Route>
      </Routes>
    </>
    )
  }

export default App;
