import React from "react";
import ResponsiveCarousel from "../../components/Carousel/Carousel";
import "./deals.css";

const deals = () => {
  return (
    <>
      <div className="anand__deals">
        <div className="anand__deals_heading">
          <h1>We Deals In</h1>
        </div>
        <div className="anand__deals_carousel">
          <ResponsiveCarousel />
        </div>
      </div>
    </>
  );
};

export default deals;
