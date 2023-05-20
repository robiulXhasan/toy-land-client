import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Offer from "../Offer/Offer";
import Gallery from "../Gallery/Gallery";
import CustomersReview from "../CustomersReview/CustomersReview";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Gallery></Gallery>
      <Offer></Offer>
      <CustomersReview></CustomersReview>
    </div>
  );
};

export default Home;
