import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import Product from './components/Product'
import Register from './pages/register/Register'
import Login from './pages/login/Login'

const App = () => {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/products/:category" element={<ProductList/>}/>
          <Route path="/products/:id" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
