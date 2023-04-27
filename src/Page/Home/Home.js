import React from 'react'
import Header from '../../container/Header/Header'
import Home from '../../container/Home/Home'
import Deals from '../../container/Our Deals/Deals'
import Reviews from '../../container/Reviews/Reviews'
import Footer from '../../container/Footer/Footer'
import About from '../../container/About/About'
const Home1 = () => {
  return (
    <div>
        <div><Header/></div>
      <div><Home/></div>
      <div><About/></div>
      <div><Deals/></div>
      <div><Reviews/></div>
      <Footer/>
    </div>
  )
}

export default Home1