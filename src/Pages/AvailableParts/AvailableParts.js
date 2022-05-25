import React from "react";
import Loading from "../../components/Loading";
import useParts from "../../hooks/useParts";
import Part from "../Home/Part";

const AvailableParts = () => {
  const [parts] = useParts();
  if (parts.length === 0) {
    return <Loading />;
  }
  return (
    <section className="lg:px-20 h-full">
      <div>
        <h2 className="text-3xl font-bold text-center my-8">
          Our AvailableParts
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {parts.map((part, index) => (
          <Part key={index} part={part} />
        ))}
      </div>
    </section>
  );
};

export default AvailableParts;
