import React from "react";

const Offer = () => {
  return (
    <div className="hero my-20 bg-base-200">
      <div className="hero-content  flex-col lg:flex-row  relative">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          src="https://img.freepik.com/premium-photo/little-boy-poses-mini-racing-car-play-relax-fresh-air_137321-1797.jpg"
          className="rounded-lg shadow-2xl"
        />
        <p
          data-aos="fade-right"
          data-aos-duration="1500"
          className="absolute left-0 md:-left-3 -top-5 bg-red-600 px-5  md:px-20 md:py-5 rounded-lg text-2xl text-white font-bold italic"
        >
          25% Off
        </p>
        <div >
          <h1 className="text-2xl md:text-4xl font-bold">Buy Kids Car Toy</h1>
          <p className="py-6">Get 25% off on first order and also get gift voucher.</p>

          <button className="btn btn-outline">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
