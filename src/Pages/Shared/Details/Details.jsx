import React from "react";
import ToyBanner from "../ToyBanner/ToyBanner";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Details = () => {
  const toyDetails = useLoaderData();
  const { toy_name, picture, price, rating, quantity, description } = toyDetails;
  return (
    <div>
      <ToyBanner name="Toy Details"></ToyBanner>
      <div className="hero w-10/12 mx-auto my-10  bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10 ">
          <img src={picture} className="w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold">{toy_name}</h1>
            <p className="pt-6 text-lg">
              <span className="font-medium">Seller name:</span>
            </p>
            <p className=" text-lg">
              <span className="font-medium">Seller email: </span>
            </p>
            <p className=" text-lg">
              <span className="font-medium">Price: </span> {price}
            </p>
            <p className=" text-lg">
              <span className="font-medium">Available Quantity:</span> {quantity}
            </p>
            <p className="flex gap-2">
              <span className="font-medium">Rating:</span>
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly /> {rating}
            </p>
            <p className=" text-lg">
              <span className="font-medium"> Description:</span> <br />
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
