import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './screens/menu'
import Product from './screens/product'
import Buy from './screens/buy'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/buy/:id" element={<Buy />} />
      </Routes>
    </Router>
    
  )
}

export default App
