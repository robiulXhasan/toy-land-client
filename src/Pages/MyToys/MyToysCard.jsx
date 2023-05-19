import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyToysCard = ({ toy, toys, setToy }) => {
  const { _id, toy_name, picture, sub_category, price, quantity, seller_name } = toy;
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = toys.filter((toy) => toy._id !== id);
          setToy(remaining);
        }
      });
  };
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask rounded w-auto h-48">
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
      <td className="text-center">
        <span className="text-xl font-semibold">${price}</span>
      </td>

      <td className=" space-x-5 text-center">
        <Link to={`update/${_id}`} className="btn btn-outline text-xl btn-circle  text-green-400">
          <FaEdit />
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-outline text-xl btn-circle  text-red-600"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default MyToysCard;
