import React from 'react'
import NavBar from './NavBar/NavBar';
import { Outlet } from 'react-router-dom';

export default function Layouts() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}
