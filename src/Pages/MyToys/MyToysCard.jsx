import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysCard = ({ toy, toys, setToy }) => {
  const { _id, toy_name, picture, sub_category, price, quantity, seller_name } = toy;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-land-server-five.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = toys.filter((toy) => toy._id !== id);
              setToy(remaining);
              Swal.fire("Deleted!", "Successfully deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask rounded w-auto h-32 md:h-48">
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
                src={picture}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold text-xl">{toy_name}</div>
            <div className="text-sm opacity-50 font-medium">Sub category : {sub_category}</div>
          </div>
        </div>
      </td>
      <td className="text-center">
        <span className="text-xl font-semibold">${price}</span>
      </td>
      <td className="text-center">
        <span className="text-xl font-semibold">{quantity}</span>
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
