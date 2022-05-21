import React from "react";
import { useQuery } from "react-query";
import Part from "./Part";

const Parts = () => {
  const { data: parts, isLoading } = useQuery("available", () =>
    fetch("parts.json").then((res) => res.json())
  );

  if (isLoading) {
    return "loading...";
  }
  return (
    <div className="my-8 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-16">Our Latest Parts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {parts.slice(0, 6).map((part, index) => (
          <Part key={index} part={part} />
        ))}
      </div>
    </div>
  );
};

export default Parts;
