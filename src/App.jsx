import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Component/pages/About'
import Contact from './Component/pages/Contact'
import Home from './Component/pages/Home'
import NavBar from './Component/pages/NavBar'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <NavBar />
    </>
  )
}

export default App