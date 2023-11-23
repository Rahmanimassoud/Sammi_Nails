
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './pages/Contact/contact'
import Gallery from './pages/Gallery/Gallery'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar />

      {/* <Contact/>  */}
      {/* <Gallery /> */}

      {/* <About/> */}
      <Home />


        {/* <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes> */}
    </div>
  )
}

export default App
