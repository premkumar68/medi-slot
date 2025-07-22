import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './Appointment'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Doctors' element={<Doctors/>}/>
      <Route path='/Doctors/:speciality' element={<Doctors/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Myprofile' element={<Myprofile/>}/>
      <Route path='/myappointment' element={<MyAppointment/>}/>
      <Route path='/Appointment/:docId' element={<Appointment/>}/>

     </Routes>
     <Footer/>
    </div>
  )
}

export default App