import React from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { id } = useParams();
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-8">Purchase Details</h2>
    </div>
  );
};

export default Purchase;
