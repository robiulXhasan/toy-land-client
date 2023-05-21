import React from "react";
import ToyBanner from "../ToyBanner/ToyBanner";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { AuthContext } from "../../../Providers/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Details = () => {
  useTitle("Details");
  const toyDetails = useLoaderData();
  const { toy_name, picture, price, rating, quantity, description, seller_email, seller_name } =
    toyDetails;
  return (
    <div>
      <ToyBanner name="Toy Details"></ToyBanner>
      <div className="hero w-11/12 md:w-10/12 mx-auto my-10  bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10 ">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            src={picture}
            className="md:w-1/2 rounded-lg shadow-2xl"
          />
          <div data-aos="fade-up"
          data-aos-duration="1000">
            <h1 className="text-4xl font-bold">{toy_name}</h1>
            <div className="pt-6 text-lg">
              <span className="font-medium">Seller name: </span>
              {seller_name}
            </div>
            <div className=" text-lg">
              <span className="font-medium">Seller email: </span>
              {seller_email}
            </div>
            <div className=" text-lg">
              <span className="font-medium">Price: </span> ${price}
            </div>
            <div className=" text-lg">
              <span className="font-medium">Available Quantity:</span> {quantity}
            </div>
            <div className="flex gap-2">
              <span className="font-medium">Rating:</span>
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly /> {rating}
            </div>
            <div className=" text-lg">
              <span className="font-medium"> Description:</span> <br />
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
