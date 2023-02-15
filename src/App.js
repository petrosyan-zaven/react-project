import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import SinglItem from './components/singl-item'
import Asaid from './components/asaid'
import Home from './pages/Home'
// import Api from './Api'
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Asaid />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/singl-item' element={<SinglItem /> } />
      
          </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App