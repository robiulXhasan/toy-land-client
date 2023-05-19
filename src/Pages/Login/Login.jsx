import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBeer, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { LoginUser, googleLogin } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    setError("");
    LoginUser(email, password)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const managePassword = (event) => {
    if (event.target.checked) {
      setShow(!show);
    } else {
      setShow(false);
    }
  };
  // google login
  const handleGoogleLogin = (event) => {
    event.preventDefault();
    googleLogin()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen  w-10/12 mx-auto">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <div className="text-center lg:text-left">
          <img
            src="https://img.freepik.com/free-vector/my-password-concept-illustration_114360-4294.jpg?w=740&t=st=1684463300~exp=1684463900~hmac=5755a93774d842d22e650fb1bb720d7f8fb437ad74fcbdc7e4470cf2ee089225"
            alt="login"
          />
        </div>
        <form
          onSubmit={handleLogin}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl border rounded-sm bg-base-100"
        >
          <div className="card-body">
            <h3 className="text-3xl text-center font-semibold">LOGIN</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label
                onClick={managePassword}
                className="cursor-pointer  label flex justify-start gap-5"
              >
                <input type="checkbox" className="checkbox checkbox-accent" />
                <span className="label-text ">Show Password</span>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-secondary" value="Login" />
            </div>
            <div className="text-center mt-2">
              <small>Don’t Have An Account ? </small>{" "}
              <Link to="/register" className="text-warning font-bold">
                Register
              </Link>
            </div>
            <p className="text-red-600">{error}</p>
            <div className="divider">OR</div>
            <div
              onClick={handleGoogleLogin}
              className="flex items-center gap-2 border border-purple-300 p-2 justify-center "
            >
              <FaGoogle /> Login with Google
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
