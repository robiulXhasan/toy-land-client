import { Rating } from "@smastrom/react-rating";
import React from "react";

const Review = ({ review }) => {
  const { reviewText, reviewRating, userName, picture } = review;
  return (
    <div className="border text-center p-10 space-y-5 shadow rounded">
      <p>{reviewText}</p>

      <img className="w-16 h-16 rounded-full mx-auto" src={picture} alt="" />
      <p>{userName}</p>
      <div className="flex justify-center gap-2">
        Rating: <Rating style={{ maxWidth: 100 }} value={reviewRating} readOnly /> {reviewRating}
      </div>
    </div>
  );
};

export default Review;
