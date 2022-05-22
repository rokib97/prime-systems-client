import React from "react";

const Review = ({ review }) => {
  const { name, ureview, location, img } = review;
  return (
    <>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{ureview}</p>
          <div className="flex items-center mt-8">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                <img src={img} alt="" />
              </div>
            </div>
            <div>
              <h2 className="card-title">{name}</h2>
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
