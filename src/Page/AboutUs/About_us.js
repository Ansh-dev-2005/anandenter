import React from 'react';
import './about.css';
import Header from '../../container/Header/Header';
import Footer from '../../container/Footer/Footer';

const AboutUs = () => {
  return (
    <>
      <Header />
      {/* About section */}
      <div className='anand__about'>
        <div className='anand__about_container'>
          <div className='anand__about_container_left'>
            <h1>ABOUT US</h1>
            <p>
              Welcome to Anand Enterprises, an Electrical Solutions provider
              that has been serving Dehradun for over 20 years. We take pride in
              providing high-quality Electrical Products to our customers, and
              we're committed to delivering exceptional customer service every
              step of the way.
            </p>
            <p>
              Our mission is to help our customers find the right electrical
              products for their needs, at a fair price, and with the level of
              service they deserve. Our experienced team of professionals is
              here to answer any questions you may have and help you make
              informed decisions about your electrical needs.
            </p>
          </div>
          {/* Why Choose Us section */}
          <div className='anand__about_container_right'>
            <h2>Why Choose Us?</h2>
            <ul>
              <li>
                We offer a wide range of high-quality electrical products.
              </li>
              <li>
                We have over 20 years of experience serving the Dehradun area.
              </li>
              <li>
                We're committed to delivering exceptional customer service
                every step of the way.
              </li>
              <li>We offer competitive pricing on all of our products.</li>
            </ul>
          </div>
        </div>
        {/* Our Partnerships section */}
        <div className='anand__about_container__down'>
          <div className='anand__about_container__down_center'>
            <h1>Our Partnerships</h1>
            <p>
              At Anand Enterprises, we take pride in being authorized dealers of
              some of the most reputable electrical brands in the industry. Our
              partnerships with Polycab, Orient, KEI, Havells, Crompton, Usha,
              and Surya enable us to provide our customers with a wide range of
              high-quality electrical products.
            </p>
            <p>
              In addition to our partnerships, we are also an authorized
              channel partner of L&T Electrical and Automation, which allows us
              to provide our customers with cutting-edge electrical solutions
              that meet their specific needs.
            </p>
            <p>
              Furthermore, we are also dealers of other well-known brands such
              as Polar, Cona, and Anchor, which allows us to offer a
              comprehensive range of electrical products to our customers.
            </p>
            <p>
              At Anand Enterprises, we are committed to providing our customers
              with the highest level of customer service and support. Our
              experienced team of professionals is always available to answer
              any questions you may have and help you find the right electrical
              products for your needs. Contact us today to learn more about our
              products and services.
            </p>
          </div>
        </div>
       
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
