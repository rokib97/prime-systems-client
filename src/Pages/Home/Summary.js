import React from "react";
import CountUp from "react-countup";
import {
  FaDesktop,
  FaFontAwesomeFlag,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";
const Summary = () => {
  return (
    <div className="mt-16 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-16">
        We Beleive in Numbers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        <div class="card  shadow bg-success">
          <div class="card-body items-center text-center">
            <FaUsers size={50} color="white" />
            <span className="text-3xl text-white font-bold">
              <CountUp delay={1} start={0} end={273} />+
            </span>
            <p className="text-white">Cuntomers around the world</p>
          </div>
        </div>
        <div class="card  bg-error shadow">
          <div class="card-body items-center text-center">
            <FaUserCheck size={50} color="blue" />
            <span className="text-3xl text-white font-bold">
              <CountUp delay={1} start={0} end={400} />+
            </span>
            <p className="text-white">we take customers feedback seriously</p>
          </div>
        </div>
        <div class="card  bg-secondary shadow">
          <div class="card-body items-center text-center">
            <FaDesktop size={50} color="white" />
            <span className="text-3xl text-white font-bold">
              <CountUp delay={1} start={0} end={500} />+
            </span>
            <p className="text-white">Parts available in out stock</p>
          </div>
        </div>
        <div class="card  bg-warning shadow">
          <div class="card-body items-center text-center">
            <FaFontAwesomeFlag size={50} color="blue" />
            <span className="text-3xl text-white font-bold">
              <CountUp delay={1} start={0} end={70} />+
            </span>
            <p className="text-white">
              we provide internatioin facilities too for our customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
