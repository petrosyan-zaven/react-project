import React from 'react'
import './Contact.scss'
import { useNavigate } from 'react-router-dom'

function Contact() {

    const navigate = useNavigate();
    
  return (
    <div className='Contact'>
        <h1>contact</h1>
        <button onClick={()=> navigate('/')}> GO Back </button>
    </div>
  )
}

export default Contact