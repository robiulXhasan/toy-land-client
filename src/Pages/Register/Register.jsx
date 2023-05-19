import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero min-h-screen  w-10/12 mx-auto">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <div className="text-center lg:text-left">
          <img
            src="https://img.freepik.com/free-vector/my-password-concept-illustration_114360-4294.jpg?w=740&t=st=1684463300~exp=1684463900~hmac=5755a93774d842d22e650fb1bb720d7f8fb437ad74fcbdc7e4470cf2ee089225"
            alt="login"
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border rounded-sm bg-base-100">
          <div className="card-body">
            <h3 className="text-3xl text-center font-semibold">REGISTER</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-secondary" value="Register" />
            </div>
            <div className="text-center mt-2">
              <small>Already Have An Account ? </small>{" "}
              <Link to="/login" className="text-warning font-bold">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
