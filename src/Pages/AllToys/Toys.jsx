import React from "react";
import { Link } from "react-router-dom";

const Toys = ({ toy }) => {
  const { _id, toy_name, picture, sub_category, price, quantity } = toy;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask rounded w-auto h-32">
              <img src={picture} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold text-xl">{toy_name}</div>
            <div className="text-sm opacity-50 font-medium">Sub category : {sub_category}</div>
            <div className="text-sm opacity-50 font-medium">Quantity : {quantity}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="text-xl font-semibold">{price}</span>
      </td>
      <td>
        <span className="text-xl font-semibold">user.displayName</span>
      </td>
      <th>
        <Link to={`toy/${_id}`} className="btn btn-outline   text-green-400">
          View Details
        </Link>
      </th>
    </tr>
  );
};

export default Toys;
