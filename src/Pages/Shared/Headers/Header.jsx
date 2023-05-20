import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import ActiveLink from "../ActiveLink";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  };
  const navLink = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/alltoys">All Toys</ActiveLink>
      </li>
      {user ? (
        <li>
          <ActiveLink to="/mytoys">My Toys</ActiveLink>
        </li>
      ) : (
        <></>
      )}
      <li>
        <ActiveLink to="/addtoy">Add a Toy</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/blogs">Blogs</ActiveLink>
      </li>
      <li className="md:hidden">
        {user ? (
          <Link onClick={handleLogOut} to="/login">
            Log Out
          </Link>
        ) : (
          <></>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-pink-50 md:px-[8%]">
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
        <ul className="menu menu-horizontal px-1 space-x-1 font-medium">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-3">
            <img
              data-toggle="tooltip"
              title={user?.displayName}
              data-placement="bottom"
              className=" w-12 h-12 rounded-full cursor-pointer"
              src={user?.photoURL}
              alt=""
            />
            <Link
              onClick={handleLogOut}
              className="btn btn-outline hidden md:block pt-4 "
              to="/login"
            >
              Log Out
            </Link>
          </div>
        ) : (
          <Link className="btn btn-outline" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
