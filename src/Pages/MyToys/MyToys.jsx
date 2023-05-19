import React, { useContext, useEffect, useState } from "react";
import ToyBanner from "../Shared/ToyBanner/ToyBanner";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysCard from "./MyToysCard";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const [toys, setToy] = useState([]);
  const [option, setOption] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:5000/mytoys?email=${email}&sort=${parseInt(option)}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [option]);
  const handleSort = (event) => {
    if (event.target.value === "Ascending") {
      setOption(1);
    }
    if (event.target.value === "Descending") {
      setOption(-1);
    }
  };

  return (
    <div>
      <ToyBanner name="My Toys"></ToyBanner>
      <div className="w-10/12 mx-auto mt-5">
        <h1 className="text-xl font-bold text-red-600 text-center"> Toys</h1>
        <h1 className="text-4xl font-semibold text-center">My Toys</h1>
        <div className="overflow-x-auto w-full my-5">
          <div className="text-end mb-5">
            <p className="text-xl font-medium text-sky-600">Sort By Price: </p>
            <select onChange={handleSort} className="select select-info  max-w-xs">
              <option value="">Select order</option>
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
          </div>
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="text-center">Toy Information</th>
                <th className="text-center">Price</th>

                <th className="text-center">Update/Delete</th>
              </tr>
            </thead>
            <tbody>
              {toys?.map((toy) => (
                <MyToysCard key={toy._id} toy={toy} toys={toys} setToy={setToy}></MyToysCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
