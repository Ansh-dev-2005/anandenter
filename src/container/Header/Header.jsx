import React from "react";
import { Navbar } from "../../components";
import "./Header.css";
import logo from "../../assets/ae_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
library.add(faLocationDot, faPhone);


library.add(faLocationDot);

const Header = () => {
  return (
    <>
      <div className="anand__header">
        <div className="anand__header_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="anand__header_info">
          <div className="anand__header_info__location">
            <div className="anand__header_info__location-icon">
              <FontAwesomeIcon
                icon="location-dot"
                size="xs"
                style={{ color: "#004aad" }}
              />
            </div>
            <div className="anand__header_info__location-text">
              <p className="anand__header_info__location-fade">31, Maharaja Shopping Complex,</p>
              <br />
              <p className="anand__header_info__location-dark">Niranjanpur, Opp. New Sabzi Mandi</p>
              
            </div>
          </div>
          <div className="anand__header_info__contact">
            <div className="anand__header_info__contact-icon">
            <FontAwesomeIcon icon="phone"  size="xs" style={{color: "#0049ae",}} />
            </div>
            <div className="anand__header_info__contact-text">
              <p className="anand__header_contact-fade">Call Us Anytime</p>
              <p className="anand__header_info__location-dark">+91 7983826123</p>
            </div> 
          </div>
          <div className="anand__header_info__button">
            <button className="anand__header_info__button-button">Get A Quote</button>
          </div>
        </div>
      </div>

      <div>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
