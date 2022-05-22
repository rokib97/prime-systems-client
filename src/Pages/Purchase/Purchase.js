import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import PurchaseModa from "./PurchaseModa";

const Purchase = () => {
  const { id } = useParams();

  const { data: singleParts, isLoading } = useQuery("parts", () =>
    fetch(`http://localhost:5000/get-parts/${id}`).then((res) => res.json())
  );
  const { name, price, img, desc, minOrderQuantity, availQuantity } =
    singleParts || {};
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="lg:px-20">
      <h2 className="text-3xl font-bold text-center my-8">Purchase Details</h2>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Name: {name}</h2>
          <p>Description: {desc.slice(0, 120)}</p>
          <p>Price: ${price} /unit</p>
          <p>Min Order Qunatity: {minOrderQuantity}</p>
          <p>Available Quantity: {availQuantity}</p>
          <div class="card-actions justify-end">
            <label
              htmlFor="purchase-modal"
              className="btn btn-wide btn-secondary bg-gradient-to-r from-secondary to-primary text-white font-bold mt-2"
            >
              Purchase
            </label>
          </div>

          <PurchaseModa singleParts={singleParts} />
        </div>
      </div>
    </div>
  );
};

export default Purchase;
