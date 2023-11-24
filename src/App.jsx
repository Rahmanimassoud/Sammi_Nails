
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './pages/Contact/contact'
import Gallery from './pages/Gallery/Gallery'
import About from './pages/About/About'
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'

function App() {

  return (
    <div>


    <Navbar />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/Gallery' element={<Gallery/>}/>
            <Route path='/About' element={<About/>}/>
        </Routes>
      {/* <Contact/>  */}

      {/* <Gallery /> */}

      {/* <About/> */}
    <br />

    <Footer />
    </div>
  )
}

export default App
