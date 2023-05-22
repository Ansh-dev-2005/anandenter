/**
 * The above function is a React component that renders a chat widget and routes to different pages
 * using React Router.
 * @returns The App component is being returned, which contains a BrowserRouter component with three
 * Route components for the paths "/", "/about", and "/products". It also contains a Widget component
 * for a chat widget that is positioned at the bottom right of the screen.
 */
import React, { useEffect } from "react";
import Home1 from "./Page/Home/Home";
import AboutUs from "./Page/AboutUs/About_us";
import Products from "./Page/Products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Switch } from "react-router-dom";
import { Widget } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "./app.css";
import Contact from "./Page/Contact/Contact";
import {useDispatch} from 'react-redux';
import Form from "./components/form/Form";
import {getProducts} from './action/products';
import Visitus from "./Page/VisitUs/Visitus";
import Pricelist from "./Page/PriceList/Pricelist";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Implement logic to handle new messages
  };

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="products" element={<Products />} />
          <Route path="pricelist" element={<Pricelist/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="visitus" element={<Visitus/>} />
          <Route path="form" element={<Form/>} />
        </Routes>
      </BrowserRouter>
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          title="My new chat widget"
          subtitle="Feel free to ask me anything!"
        />
      </div>
    </>
  );
};

export default App;
