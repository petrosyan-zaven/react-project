
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Asaid from './components/asaid';
import Home from './pages/home'
import About from './pages/about';
import SinglItem from './components/singl-item';
import Contact from './pages/contact/Contact';
import CategoryList from './pages/categoryList/CategoryList';


function App() {
  return (
    <div className='App'>

<Router>
      <Header />
      <Asaid />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About />} />
          <Route exact path='/:id' element={<SinglItem/>} />
          <Route path='/genre/:genre' element={<CategoryList/>}/>
        </Routes>
      <Footer />
    </Router>

    </div>
  )
}

export default App