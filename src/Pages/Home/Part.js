import React from "react";

const Part = ({ part }) => {
  const { name, img, desc, price, minOrderQuantity, availQuantity } = part;
  return (
    <div class="card max-w-:lg mx-auto px-0 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-80" src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Name: {name}</h2>
        <p>Description: {desc.slice(0, 50)}</p>
        <p>Price: ${price}</p>
        <p>Min Order Quantity: {minOrderQuantity}</p>
        <p>Available Quantity: {availQuantity}</p>
        <div class="card-actions justify-start">
          <button class="btn btn-primary">purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Part;
