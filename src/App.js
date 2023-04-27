import React from 'react';
import Home1 from './Page/Home/Home';
import AboutUs from './Page/AboutUs/About_us';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Page/Products/Products';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './app.css'

const App = () => {
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
  };
  return (
    <>
      <BrowserRouter basename='/'  >

        <Routes>
          <Route index element={<Home1 />} />
          <Route path='/About' element={<AboutUs />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="My new chat widget"
      subtitle="Feel free to ask me anything!"
    />      </div>
    </>
  );
};

export default App;
