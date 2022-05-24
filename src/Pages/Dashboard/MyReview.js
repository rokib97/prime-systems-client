import axios from "axios";
import React, { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";

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
      .post("http://localhost:5000/add-review", review)
      .then((res) => console.log(res));
    e.target.reset();
    console.log(review);
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
      <h2 className="text-2xl">Add Your Review Here</h2>
      <div class="hero h-full bg-base-100">
        <div class="hero-content flex-col lg:flex-row">
          <div class="text-start lg:text-start">
            <h1 class="text-5xl font-bold">Let's Review.</h1>
            <p class="py-6 w-4/5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              totam vel ratione culpa similique quam mollitia alias eius eum.
              Dolore quia voluptate architecto, quidem ab nesciunt dolorum
              impedit eius! Ipsa?
            </p>
            <p>let's make the world better together! </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm lg:max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-md"
                />
                <input
                  type="number"
                  name="ratings"
                  placeholder="Your Ratings"
                  className="input input-bordered w-full max-w-md"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Your Location"
                  className="input input-bordered w-full max-w-md"
                />
                <textarea
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
                <PrimaryButton>Sumbit</PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
