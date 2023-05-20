import React from "react";
import { Link } from "react-router-dom";
import {
  FaAddressBook,
  FaAddressCard,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  bg-pink-50 text-base-content  py-10 ">
      <div className=" footer px-10 md:px-[8%] bg-pink-50 text-base-content">
        <div>
          <Link to="/" className=" ">
            <img
              className="w-14"
              src="https://cdn-icons-png.flaticon.com/512/529/529634.png?w=740&t=st=1684354519~exp=1684355119~hmac=7e4284cf41ebeb9b3a67a6c2d4c8b6507609b60af5494ddce48232a7bcbcdebb"
              alt=""
            />
            <h3 className="text-2xl font-bold">
              Toy<span className="text-red-600">Land</span>
            </h3>
          </Link>

          <p className=" opacity-80">
            Find The best toy car from here. <br /> The best services provider{" "}
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to="/alltoys" className="link link-hover">
            All Toys
          </Link>
          <Link to="/mytoys" className="link link-hover">
            My Toys
          </Link>
          <Link to="/addtoy" className="link link-hover">
            Add a Toy
          </Link>
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
        <div>
          <span className="footer-title">Contact us on</span>
          <div className="flex items-center gap-2">
            Address: 102/d-block, Savar, Dhaka
          </div>
          <p>Phone: 0095667895</p>
          <div className="flex items-center gap-2">
            Social: <FaFacebookSquare /> <FaInstagramSquare /> <FaTwitterSquare />
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <p className="text-center">Copyright © 2023 - All right reserved by ToyLand Marketplace</p>
    </footer>
  );
};

export default Footer;
