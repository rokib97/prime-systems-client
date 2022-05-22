import React from "react";
import { useQuery } from "react-query";
import Part from "../Home/Part";

const AvailableParts = () => {
  const { data: parts, isLoading } = useQuery("available", () =>
    fetch("parts.json").then((res) => res.json())
  );

  if (isLoading) {
    return "loading...";
  }
  return (
    <div className="lg:px-20">
      <h2 className="text-3xl font-bold text-center my-8">
        Our AvailableParts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {parts.map((part, index) => (
          <Part key={index} part={part} />
        ))}
      </div>
    </div>
  );
};

export default AvailableParts;
