import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://cdn3.eyeem.com/thumb/55963c765e8222024c8537af38e6c3154a44a8d7-1594228770611/w/800")`,
      }}
    >
      <div className="hero-overlay bg-gradient-to-r from-[#491c1c] to-[rgba(21, 21, 21, 0)]"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome To </h1>
          <h1 className="mb-5 text-5xl font-bold">
            Toy<span className="text-red-600">Land</span>
          </h1>
          <p className="mb-5">
            Welcome to Toy Land, where imagination comes to life! We are thrilled to have you here
            in our enchanting online world of toys. 
          </p>
          <Link
            to="/alltoys"
            className="px-5 py-3 rounded-lg  bg-white text-black font-medium uppercase "
          >
            Explore Toys
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
