import React from "react";
import ToyBanner from "../Shared/ToyBanner/ToyBanner";
import { FaBeer, FaRegEdit, FaRemoveFormat, FaTrash, FaXRay } from "react-icons/fa";

const AllToys = () => {
  return (
    <div>
      <ToyBanner></ToyBanner>
      <form className="mt-10 text-center">
        <input
          type="search"
          placeholder="Search toys by name"
          className="input input-bordered rounded-none input-error w-1/2  mx-auto "
        />
        <input className="bg-red-600 p-3 text-white" type="submit" value="Search" />
      </form>
      <div className="w-10/12 mx-auto mt-5">
        <h1 className="text-xl font-bold text-red-600 text-center"> Toys</h1>
        <h1 className="text-4xl font-semibold text-center">All Toys</h1>
        <div className="overflow-x-auto w-full mt-5">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Toy Info</th>
                <th>Price</th>
                <th>Seller</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">sub_category</div>
                      <div className="text-sm opacity-50">quantity</div>
                    </div>
                  </div>
                </td>
                <td>price</td>
                <td>user.displayName</td>
                <th className="flex items-center gap-5 ">
                  <button className="btn btn-outline   text-green-400">View Details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
