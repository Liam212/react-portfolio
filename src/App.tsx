import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './screens/About'
import Contact from './screens/Contact'
import Home from './screens/Home'
import Work from './screens/Work'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
