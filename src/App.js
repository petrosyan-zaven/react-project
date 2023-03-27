
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Asaid from './components/asaid';
import Home from './pages/home'
import About from './pages/about';
import SinglItem from './components/singl-item';
import Contact from './pages/contact/Contact';
import CategoryList from './pages/categoryList/CategoryList';
import AddGame from './pages/addGame/AddGame';
import Basket from './components/basket/Basket';


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
          <Route path='/addgames' element={<AddGame />} />
          <Route exact path='/:id' element={<SinglItem/>} />
          <Route path='/genre/:genre' element={<CategoryList/>}/>
          <Route path='/basket' element={<Basket />}/>
        </Routes>
      <Footer />
    </Router>

    </div>
  )
}

export default App