import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Product from './pages/Product'

import Seller from "./pages/Seller"
import AddNewProduct from './pages/AddNewProduct'

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Seller />} />
          <Route path="/add-new-product" element={<AddNewProduct />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
