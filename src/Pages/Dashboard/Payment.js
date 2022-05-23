import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L1DcCAEGFyJJ0zROqcAybdN1iZgfZDHVBxiNBpoT7GhZM1fSyYC6O5mv7kDQYFoJ45fn5eWBwgwUnBh9cpJ4u0U00v4bqtawT"
);
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/get-purchase/${id}`;
  const { data: purchase, isLoading } = useQuery(["purchase", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/jason",
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-2xl">Please Make Your Payment</h2>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {purchase.userName}</p>
          <h2 class="card-title">Pay for: {purchase.partsName}</h2>
          <p>Price: ${purchase.price}</p>
          <p>Quantity: {purchase.quantity}</p>
          <hr />
          <p>Please pay: ${purchase.totalPrice}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm purchase={purchase} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
