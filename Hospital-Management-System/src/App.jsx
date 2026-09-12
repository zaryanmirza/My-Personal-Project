import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import PatientSignup from './patients/auth/Signup'
import DoctorSignup from './doctors/auth/Signup'
import AdminLogin from './admin/auth/Login'
import PatientLogin from './patients/auth/Login'
import DoctorLogin from './doctors/auth/Login'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/patient-signup" element = {<PatientSignup />} />
        <Route path = "/doctor-signup" element = {<DoctorSignup />} />
        <Route path = "/patient-login" element = {<PatientLogin />} />
        <Route path = "/doctor-login" element = {<DoctorLogin />} />
        <Route path = "/admin-login" element = {<AdminLogin />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App

