import React, { useState } from "react";
import "./navbar.css";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    const menuBox = document.querySelector(".anand__navbar_menu_box");
    if (menuBox) {
      menuBox.classList.toggle("show");
    }
  };
  
  const closeMenu = () => {
    setShowMenu(false);
    const menuBox = document.querySelector(".anand__navbar_menu_box");
    if (menuBox) {
      menuBox.classList.remove("show");
    }
  };
  
  return (
    <div className="anand__navbar">
      <div className="anand__navbar_links">
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/products">Products</a>
        <a href="/PriceList">Catalouge and Price list</a>
        <a href="/Contact">Contact Us</a>
        <a href="/VisitUs">Visit Us</a>
      </div>
      <div className="anand__navbar_menu" onClick={toggleMenu}>
        &#9776;
      </div>
      {showMenu && (
        <div className="anand__navbar_menu_box">
          <button className="anand__navbar_menu_close_button" onClick={closeMenu}>
            X
          </button>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
            <a href="/PriceList">Catalouge and Price list</a>

            </li>
            <li>
              <a href="/Contact">Contact Us</a>
            </li>
            <li>
              <a href="/VisitUs">Visit Us</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
  
};

export default Navbar;
