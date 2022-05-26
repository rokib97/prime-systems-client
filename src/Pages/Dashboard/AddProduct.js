import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [imgURL, setImgURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const singleParts = {
      name: e.target.name.value,
      price: e.target.price.value,
      minOrderQuantity: e.target.minquantity.value,
      availQuantity: e.target.avlquantity.value,
      desc: e.target.description.value,
      img: imgURL,
    };
    axios
      .post("https://fast-river-88547.herokuapp.com/add-parts", singleParts)
      .then((res) => {
        toast.success("Product Added Successfully");
      });
    e.target.reset();
  };

  const handleUploadImage = (e) => {
    const formData = new FormData();
    const image = e.target.files[0];
    formData.append("image", image);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=84ac25e6f0a66515cd8221236b78c8f9",
        formData
      )
      .then((res) => {
        // console.log(res.data.data.display_url);
        setImgURL(res.data.data.display_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2 className="text-2xl">Add Product</h2>
      <div class=" h-full w-full bg-base-100">
        <div class="hero-content flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-full max-w-sm lg:max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Product Name"
                  className="input input-bordered w-full max-w-md"
                />
                <input
                  required
                  type="number"
                  name="price"
                  placeholder="Product Price"
                  className="input input-bordered w-full max-w-md"
                />
                <input
                  type="number"
                  required
                  name="minquantity"
                  placeholder="Min Order Quantity"
                  className="input input-bordered w-full max-w-md"
                />
                <input
                  type="number"
                  required
                  name="avlquantity"
                  placeholder="Available Quantity"
                  className="input input-bordered w-full max-w-md"
                />
                <textarea
                  required
                  name="description"
                  className="textarea input-bordered w-full max-w-md"
                  placeholder="Product Description"
                  rows={6}
                ></textarea>
                <input
                  type="file"
                  onChange={handleUploadImage}
                  placeholder="Your Image"
                  className="w-full max-w-xs"
                />
                {!imgURL ? (
                  <p className="text-red-500">
                    Uploading an image can take some time.Please wait...
                  </p>
                ) : (
                  ""
                )}
                <button
                  disabled={!imgURL}
                  className="btn btn-primary text-uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
