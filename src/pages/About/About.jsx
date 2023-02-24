import React from 'react'
import './about.scss'
import { useNavigate } from 'react-router-dom';

function About() {

  const navigate = useNavigate();

  return (
    <div className='About'>
        <h1>About</h1>
      <button onClick={()=> navigate('/')}> GO Back </button>
    </div>
  )
}

export default About