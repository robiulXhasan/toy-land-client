import React from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ToysCard = ({ toy }) => {
  const { _id, picture, toy_name, rating, price } = toy;
  return (
    <div className="card card-side  border shadow-xl">
      <figure className="w-1/2 p-4">
        <img src={picture} className="rounded-lg" alt="Car" />
      </figure>
      <div className="card-body text-start ">
        <h2 className="card-title justify-start">{toy_name}</h2>
        <p>Price: {price}</p>
        <p className="flex">
          Rating: <Rating style={{ maxWidth: 100 }} value={rating} readOnly /> {rating}
        </p>
        <div className="card-actions ">
          <button className="btn btn-sm btn-outline text-xs">Show Details</button>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
