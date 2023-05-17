import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/alltoys">All Toys</Link>
      </li>
      <li>
        <Link to="/mytoys">My Toys</Link>
      </li>
      <li>
        <Link to="/addtoy">Add a Toy</Link>
      </li>
      <li>
        <Link to="/blogs"></Link>
      </li>
      <li>
        <Link className="btn btn-outline" to="/login">
          Login
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-3">
          <img
            className="w-14"
            src="https://cdn-icons-png.flaticon.com/512/529/529634.png?w=740&t=st=1684354519~exp=1684355119~hmac=7e4284cf41ebeb9b3a67a6c2d4c8b6507609b60af5494ddce48232a7bcbcdebb"
            alt=""
          />{" "}
          <p className="text-2xl font-bold">
            Toy<span className="text-red-600">Land</span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default Header;
