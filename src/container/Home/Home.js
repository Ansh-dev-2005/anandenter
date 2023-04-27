import React from 'react'
import home_img from '../../assets/home_img.avif'
import './home.css'

const Home = () => {
  return (
    <div className='anand__home'>
        <div className='anand__home_container'>
            <div className='anand__home_container_image'>
                <img src={home_img} alt='home_img'/>
                <div className='anand__home_container_image_overlay'>
                <h1 >WELCOME TO ANAND ENTERPRISES</h1>
                <p>The power of quality electricals for your home.</p>
                </div>
                
            </div>
            

        </div>

    </div>
  )
}

export default Home