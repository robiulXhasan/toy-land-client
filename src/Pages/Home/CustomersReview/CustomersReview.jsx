import React, { useEffect, useState } from "react";
import Review from "./Review";

const CustomersReview = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("https://toy-land-server-five.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <h3 className="md:text-xl font-semibold text-red-600 text-center">REVIEW</h3>
      <h1 className="text-xl md:text-4xl font-bold  text-center">What says our Customers</h1>
      <div className="grid md:grid-cols-3 gap-6 my-10">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default CustomersReview;
