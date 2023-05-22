import React from 'react';
import Header from '../../container/Header/Header';
import Footer from '../../container/Footer/Footer';
import './visitus.css';

const Visitus = () => {
  return (
    <div className='visitus'>  
    <Header/>      
    <h1 className='visitus__heading'>Visit Us</h1>

      <div className='visitus__container'>
        <div className='visitus__container__content'>
          <div className='visitus__container__left'>
            <p>Address: 31, Maharaja Shopping Complex,</p>
            <p> Niranjanpur, Opp. New Sabzi Mandi, Saharanpur Road,</p>
            <p> Dehradun, Uttarakhand 248001</p>
            <p>Phone: 7983826123</p>
            <p>Email: anandenterprisesddn2020@gmail.com</p>
          </div>
          <div className='visitus__container__right'>
            <div className='visitus__container__right__map'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10922.569651937465!2d78.00860178679139!3d30.30678345989785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092a2eede9c803%3A0x2b94f0a1f368d5d1!2sAnand%20Enterprises!5e0!3m2!1sen!2sin!4v1684640329434!5m2!1sen!2sin" width="600" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Visitus;
