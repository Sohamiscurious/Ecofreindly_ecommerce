import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import AddNewProduct from './pages/AddNewProduct';
import Cart from './pages/Cart';
import EditProduct from './pages/EditProduct';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Seller from "./pages/Seller";
import EcoFriendlyInfo from './pages/information/EcoFriendlyInfo';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

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
          <Route path="/news" element={<EcoFriendlyInfo/>} />
          <Route path="/dashboard" element={<Seller/>} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
