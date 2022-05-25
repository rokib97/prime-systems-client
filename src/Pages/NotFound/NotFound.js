import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../../assets/images/error.png";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div class="hero h-full lg:h-[80vh] bg-base-100">
      <div class="hero-content flex-col lg:flex-row">
        <div>
          <h1 class="text-5xl font-bold">WE ARE SORRY,PAGE NOT FOUND!</h1>
          <p class="py-4 lg:max-w-2xl">
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
            CHANGED OR IS TEMPORARILY UNAVAILABLE
          </p>
          <button
            onClick={() => navigate("/")}
            className="btn btn-primary text-uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
          >
            BACK TO HOMEPAGE
          </button>
        </div>
        <img src={error} class="lg:max-w-lg rounded-lg" alt="" />
      </div>
    </div>
  );
};

export default NotFound;
