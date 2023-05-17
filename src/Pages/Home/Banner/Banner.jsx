import React from "react";

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
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="px-5 py-2 rounded-lg text-medium  bg-white text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
