// WithNav.js (Stand-alone Functional Component)
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';

export default ({logout}) => {
  return (
    <>
      <Navbar logout={logout}/>
      <Outlet />
    </>
  );
};