import React from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Slider/>
      <Categories/>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home
