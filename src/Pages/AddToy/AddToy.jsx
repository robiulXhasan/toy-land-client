import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  useTitle("Add Toy");
  // handle add toy operation
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const seller_name = user?.displayName;
    const seller_email = user?.email;
    const toy_name = form.toyName.value;
    const price = form.price.value;
    const picture = form.picture.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const description = form.details.value;
    const sub_category = form.sub_category.value;
    const toy = {
      seller_name,
      seller_email,
      toy_name,
      picture,
      price,
      quantity,
      rating,
      description,
      sub_category,
    };
    fetch("https://toy-land-server-five.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy Added Successfully !",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="bg-base-200">
      <h1 className="text-center text-3xl font-bold  pt-16">Add a Toy</h1>
      <div className="hero pb-16 md:w-10/12 mx-auto">
        <div className="hero-content w-full">
          <div className="card w-full shadow px-5 bg-base-100">
            <form onSubmit={handleAddToy}>
              <div className="card-body space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      defaultValue={user?.displayName}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Email"
                      defaultValue={user?.email}
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Toy Name</span>
                    </label>
                    <input
                      type="text"
                      name="toyName"
                      placeholder="Enter toy name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Toy Picture URL</span>
                    </label>
                    <input
                      type="text"
                      name="picture"
                      placeholder="Picture url of the toy"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="text"
                      name="price"
                      placeholder="Enter toy price"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Quantity</span>
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      placeholder="Enter quantity"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <input
                      type="text"
                      name="rating"
                      placeholder="Enter rating"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Details</span>
                    </label>
                    <textarea
                      type="text"
                      name="details"
                      placeholder="Enter toy details"
                      className="input input-bordered pt-2"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Sub Category</span>
                    </label>
                    <select
                      name="sub_category"
                      className="select select-bordered font-normal w-full"
                    >
                      <option>Choose sub-category</option>
                      <option>Sports Car</option>
                      <option>Jeep</option>
                      <option>Regular Car</option>
                    </select>
                  </div>
                </div>

                <div className="form-control pt-6">
                  <input type="submit" className="btn btn-dark" value="Add a Toy" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
