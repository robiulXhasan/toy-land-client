import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" footer py-10 px-10 md:px-[8%] bg-pink-50 text-base-content">
      <div>
        <Link to="/" className=" ">
          <img
            className="w-14"
            src="https://cdn-icons-png.flaticon.com/512/529/529634.png?w=740&t=st=1684354519~exp=1684355119~hmac=7e4284cf41ebeb9b3a67a6c2d4c8b6507609b60af5494ddce48232a7bcbcdebb"
            alt=""
          />
        </Link>
        <h3 className="text-2xl font-bold">
          Toy<span className="text-red-600">Land</span>
        </h3>
        <p className=" opacity-80">
          Find The best toy car from here. <br /> The best services provider{" "}
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">All Toys</a>
        <a className="link link-hover">My Toys</a>
        <a className="link link-hover">Add a Toy</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Blogs</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
