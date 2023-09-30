import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
    <>
     <Navbar/>
     <Outlet/>
     
     <hr  className='mt-10'/>
     <Footer/>
    </>
  )
}

export default App
