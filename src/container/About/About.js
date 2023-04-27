import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className='anand__about'>
      <div className='anand__about_container'>
        <div className='anand__about_container_left'>
          <h1>ABOUT US</h1>
          <p>
            Welcome to Anand Enterprises, an Electrical Solutions provider that has been serving Dehradun for over 20 years. We take pride in providing high-quality Electrical Products to our customers, and we're committed to delivering exceptional customer service every step of the way.
          </p>
          <p>
            Our mission is to help our customers find the right electrical products for their needs, at a fair price, and with the level of service they deserve. Our experienced team of professionals is here to answer any questions you may have and help you make informed decisions about your electrical needs.
          </p>
        </div>
        <div className='anand__about_container_right'>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>We offer a wide range of high-quality electrical products.</li>
            <li>We have over 20 years of experience serving the Dehradun area.</li>
            <li>We're committed to delivering exceptional customer service every step of the way.</li>
            <li>We offer competitive pricing on all of our products.</li>
          </ul>
          <a href='#' className='anand__button'>Read More</a>
        </div>
      </div>
    </div>
  );
};

export default About;
