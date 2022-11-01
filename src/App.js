import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Work from './pages/Work/Work'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/work" element={<Work />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
