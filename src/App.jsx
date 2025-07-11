import { useContext, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Gallery from './pages/Gallery/Gallery'
import Creator from './pages/Creator/Creator'
import { LoginContext } from './context/LoginContext'


function App() {

  useContext

  return (
    <>
    <LoginContext>
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
    </LoginContext>
    </>
  )
}

export default App
