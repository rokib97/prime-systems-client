import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

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
      <h2 className="text-2xl">Please Pay For {purchase.partsName}</h2>
    </div>
  );
};

export default Payment;
