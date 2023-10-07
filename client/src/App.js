import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

import Seller from "./pages/Seller";
import AddNewProduct from './pages/AddNewProduct';

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Seller />} />
          <Route path="/add-new-product" element={<AddNewProduct />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
