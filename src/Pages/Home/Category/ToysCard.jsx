import React, { useContext } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
const ToysCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleViewDetails = (id) => {
    if (!user) {
      Swal.fire({ title: "You have to log in first to view details!", icon: "warning" });
    }

    navigate(`alltoys/toy/${_id}`);
  };
  const { _id, picture, toy_name, rating, price } = toy;
  return (
    <div
      className=" bg-base-200  border rounded  shadow-xl md:flex  items-center gap-3"
    >
      <figure className="md:w-1/2 p-4">
        <img
        
          src={picture}
          className="rounded-lg"
          alt="Car"
        />
      </figure>
      <div className="card-body text-start">
        <h2 className="card-title ">{toy_name}</h2>
        <p>Price: ${price}</p>
        <div className="flex">
          Rating: <Rating style={{ maxWidth: 100 }} value={rating} readOnly /> {rating}
        </div>
        <div className="card-actions ">
          <button onClick={() => handleViewDetails(_id)} className="btn btn-sm btn-outline text-xs">
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
