import React from 'react'
import  './Header.scss'
import { NavLink  } from 'react-router-dom'


const Header = () => {
  return (
    <div className="header">
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>
    </div>
  )
}

export default Header