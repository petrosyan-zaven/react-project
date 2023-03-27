import React from 'react'
import  './Header.scss'
import { NavLink  } from 'react-router-dom'


const Header = () => {
  return (
    <div className="header">
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/addgames'>Add games</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>
      <NavLink className='basket' to='/basket'> <i className="fa-sharp fa-solid fa-cart-shopping"></i>
      </NavLink>
    </div>
  )
}

export default Header