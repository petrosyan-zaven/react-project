import React from 'react'
import  './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/singl-item'>SinglItem</NavLink>
      <NavLink to='/about'>About</NavLink>
    </nav>
  )
}

export default Header