import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MyReview = () => {
  const [imgURL, setImgURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const review = {
      name: e.target.name.value,
      location: e.target.location.value,
      ratings: e.target.ratings.value,
      ureview: e.target.review.value,
      img: imgURL,
    };
    axios
      .post("https://prime-systems-server.vercel.app/add-review", review)
      .then((res) => {
        toast.success("Review Added Successfully");
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
        setImgURL(res.data.data.display_url);
      })
      .catch((error) => {});
  };
  return (
    <div>
      <h2 className="text-2xl">Add Your Review Here</h2>
      <div className="hero h-full bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-start lg:text-start">
            <h1 className="text-5xl font-bold">Let's Review.</h1>
            <p className="py-6 w-4/5">
              We are very responsibale to our clients, we listen them , we take
              suggetions from and and improve our quality based on their
              suggestions, Therefore a good review makes our product more
              qualityful.
            </p>
            <p>let's make the world better together! </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm lg:max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-md"
                />
                <input
                  required
                  type="number"
                  name="ratings"
                  placeholder="Your Ratings Out Of 5"
                  className="input input-bordered w-full max-w-md"
                />
                <input
                  type="text"
                  required
                  name="location"
                  placeholder="Your Location"
                  className="input input-bordered w-full max-w-md"
                />
                <textarea
                  required
                  name="review"
                  className="textarea input-bordered w-full max-w-md"
                  placeholder="Your review"
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
                  Sumbit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
