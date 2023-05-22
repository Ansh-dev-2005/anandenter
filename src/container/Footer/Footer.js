import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='anand__footer'>
        <div className='anand__footer__container'>
            <div className='anand__footer__container__left'>
                <h1>ANAND ENTERPRISES</h1>
                <p>ANAND ENTERPRISES is a leading  supplier of a wide range of products.We have gained a remarkable and strong position in the market.</p>

                <p className='address'>31,Maharaja Shopping Complex,Niranjanpur</p>
                <p className='address'>Opp. New Sabzi Mandi, Saharanpur Road</p>
                <p className='address'>Dehradun</p>
                <p className='email'>anandenterprisesddn2020@gmail.com</p>
                <p className='phonenumber'>+91 7983826123</p>
            </div>
            <div className='anand__footer__container__center'>
                <h1>Explore</h1>
                {/*Quick Links */}
                <ul className='anand__footer__container__center-links'>
                    <a href='/'><li>Home</li></a>
                    <a href='/about'><li>About Us</li></a>
                    <li>Our Deals</li>
                    <li>Reviews</li>
                    <li>Contact Us</li>
                    <li>Visit Us</li>
                </ul>
            </div>
            <div className='anand__footer__container__right'>
                <h1>Follow Us</h1>
                {/*Social Media Links */}
                <ul>
                    <li><FontAwesomeIcon icon={faFacebookF} /> Facebook</li>
                    <li><FontAwesomeIcon icon={faInstagram} /> Instagram</li>
                    <li><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</li>
                    <li><FontAwesomeIcon icon={faGoogle} /> Google</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
export default Footer