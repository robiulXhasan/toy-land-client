import React, { useState } from "react";
import ToyBanner from "../Shared/ToyBanner/ToyBanner";
import { useLoaderData } from "react-router-dom";
import Toys from "./Toys";

const AllToys = () => {
  const allToys = useLoaderData();
  const [toys, setToys] = useState(allToys);
  const handleSearch = (event) => {
    event.preventDefault();
    const inputValue = event.target.search.value;
    fetch(`http://localhost:5000/toys/name/?name=${inputValue}&sort=1`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };
  return (
    <div>
      <ToyBanner name="All Toys"></ToyBanner>
      <form onSubmit={handleSearch} className="mt-10 text-center">
        <input
          type="search"
          name="search"
          placeholder="Search toys by name"
          className="input input-bordered rounded-none input-error w-1/2  mx-auto "
        />
        <input className="bg-red-600  btn rounded-none text-white" type="submit" value="Search" />
      </form>
      <div className="w-10/12 mx-auto mt-5">
        <h1 className="text-xl font-bold text-red-600 text-center"> Toys</h1>
        <h1 className="text-4xl font-semibold text-center">All Toys</h1>
        <div className="overflow-x-auto w-full mt-5">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Toy Information</th>
                <th>Price</th>
                <th>Seller</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {toys?.map((toy) => (
                <Toys key={toy._id} toy={toy}></Toys>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
