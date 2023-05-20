import React from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const ToysCard = ({ toy }) => {
  const { _id, picture, toy_name, rating, price } = toy;
  return (
    <div className="card md:card-side  border shadow-xl items-center">
      <figure className="md:w-1/2 p-4">
        <img src={picture} className="rounded-lg" alt="Car" />
      </figure>
      <div className="card-body text-start ">
        <h2 className="card-title justify-start">{toy_name}</h2>
        <p>Price: ${price}</p>
        <div className="flex">
          Rating: <Rating style={{ maxWidth: 100 }} value={rating} readOnly /> {rating}
        </div>
        <div className="card-actions ">
          <Link to={`alltoys/toy/${_id}`} className="btn btn-sm btn-outline text-xs">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
