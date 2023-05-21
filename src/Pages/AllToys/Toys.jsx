import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const Toys = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const { _id, toy_name, picture, sub_category, price, quantity, seller_name } = toy;

  const navigate = useNavigate();
  const handleViewDetails = (id) => {
    if (!user) {
      Swal.fire({ title: "You have to log in first to view details!", icon: "warning" });
    }

    navigate(`toy/${_id}`);
  };
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
            <div className="text-sm opacity-50 font-medium">Seller Name : {seller_name}</div>
          </div>
        </div>
      </td>
      <td className="text-center">
        <span className="text-xl font-semibold">${price}</span>
      </td>
      <td className="text-center">
        <span className="text-lg font-semibold">{quantity}</span>
      </td>
      <td className="text-center">
        <button onClick={() => handleViewDetails(_id)} className="btn btn-outline   text-green-400">
          View Details
        </button>
      </td>
    </tr>
  );
};

export default Toys;
