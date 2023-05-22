import React from 'react';
import Header from '../../container/Header/Header';
import Footer from '../../container/Footer/Footer';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <Header />
      <div className='contact__content'>
        <h1 className='contact__heading'>Contact Us</h1>
        <p className='contact__text'>
          We'd love to hear from you! Get in touch with us through one of the following methods:
        </p>
        <div className='contact__options'>
          <div className='contact__option'>
            <a href='https://wa.me/917983826123' target='_blank' rel="noreferrer">
              <img src='https://img.icons8.com/color/48/000000/whatsapp--v1.png' alt='WhatsApp' />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className='contact__option'>
            <a href='mailto:anandenterprisesddn2020@gmail.com' target='_blank' rel='noreferrer'>
              <img src='https://img.icons8.com/color/48/000000/gmail--v1.png' alt='Gmail' />
              <span>Email</span>
            </a>
          </div>

          <div className='contact__option'>
            <a href='tel:+917983826123' target='_blank' rel='noreferrer'>
              <img src='https://img.icons8.com/color/48/000000/phone--v1.png' alt='Phone' />
              <span>Phone</span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
