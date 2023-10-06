import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import NavBar from './components/NavBar';
import PrivateComponent from './components/PrivateComponent'


const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/logout" element={<h1>logout</h1>} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
