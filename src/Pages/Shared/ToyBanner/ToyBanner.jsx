import React from "react";

const ToyBanner = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url("http://2.bp.blogspot.com/-482sXJKdSxE/UW_e2LdOKTI/AAAAAAAAE5Q/jAWbvXV8vRg/s1600/shelllego2.jpg")`,
        height: "400px",
      }}
    >
      <div className="hero-overlay bg-gradient-to-r from-[#5f1c1c] to-[rgba(21, 21, 21, 0)]"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">All Toys </h1>
        </div>
      </div>
    </div>
  );
};

export default ToyBanner;
