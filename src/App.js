
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Asaid from './components/asaid';
import Home from './pages/home'
import About from './pages/about';
import SinglItem from './components/singl-item'


function App() {
  return (
    <div className='App'>

<Router>
      <Header />
      <Asaid />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/:id' element={<SinglItem/>} />
        </Routes>
      <Footer />
    </Router>

    </div>
  )
}

export default App