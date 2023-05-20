import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Offer from "../Offer/Offer";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Gallery></Gallery>
      <Offer></Offer>
    </div>
  );
};

export default Home;
