import React from 'react'
import NavBar from './NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

export default function Layouts() {
  return (
    <div className='Layouts'>
      <NavBar/>
      <Outlet/>
      {/* <Footer/> */}
    </div>
  )
}
