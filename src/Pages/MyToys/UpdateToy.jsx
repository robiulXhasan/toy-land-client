import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const id = useParams();
  const toyData = useLoaderData();
  const { price, quantity, description } = toyData;
  const navigate = useNavigate();

  const handleToyUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const price = form.price.value;

    const quantity = form.quantity.value;

    const description = form.details.value;

    const toy = {
      price,
      quantity,
      description,
    };
    fetch(`http://localhost:5000/update/${id.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Successfully updated Toy Information ",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
          navigate("/mytoys");
        }
      });
  };
  return (
    <div className="bg-base-200">
      <div className="hero py-16 md:w-10/12 mx-auto">
        <div className="hero-content w-full">
          <div className="card w-full shadow bg-base-100">
            <form onSubmit={handleToyUpdate}>
              <div className="card-body space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="text"
                      name="price"
                      defaultValue={price}
                      placeholder="Enter toy price"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Quantity</span>
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      defaultValue={quantity}
                      placeholder="Enter quantity"
                      className="input input-bordered"
                    />
                  </div>
                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <textarea
                    type="text"
                    name="details"
                    defaultValue={description}
                    placeholder="Enter toy details"
                    className="textarea textarea-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <input type="submit" className="btn btn-dark" value="Update " />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
