import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton";

const Part = ({ part }) => {
  const { _id, name, img, desc, price, minOrderQuantity, availQuantity } =
    part || {};
  return (
    <div className="card w-full max-w-:lg mx-auto px-0 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-80" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p>Description: {desc.slice(0, 50)}</p>
        <p>Price: ${price}</p>
        <p>Min Order Quantity: {minOrderQuantity}</p>
        <p>Available Quantity: {availQuantity}</p>
        <div className="card-actions justify-start">
          <Link to={`/purchase/${_id}`}>
            <PrimaryButton>purchase</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Part;
