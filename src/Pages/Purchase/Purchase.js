import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import PurchaseModa from "./PurchaseModa";

const Purchase = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: singleParts,
    isLoading,
    refetch,
  } = useQuery("parts", () =>
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
              className="btn  btn-success text-white font-bold mt-2"
            >
              Purchase
            </label>
            <button
              onClick={() => navigate("/availableparts")}
              className="btn  btn-error  text-white font-bold mt-2"
            >
              Purchase More
            </button>
          </div>

          <PurchaseModa singleParts={singleParts} refetch={refetch} />
        </div>
      </div>
    </div>
  );
};

export default Purchase;
