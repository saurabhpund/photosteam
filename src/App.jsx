import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Gallery from './pages/Gallery/Gallery'
import Creator from './pages/Creator/Creator'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route index path='/gallery' element={<Gallery />} />
          <Route index path='/creators' element={<Creator />} />
          <Route path='auth/login' element={<Login />} />
          <Route path='auth/register' element={<Register />} />
          <Route path='auth/forgot-password' element={<h1>Forgot Password Page</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
