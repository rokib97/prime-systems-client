import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/images/banner.png";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="hero h-full lg:h-[80vh] bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-5xl font-bold"
          >
            Delivering a Better Tomorrow!
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="400"
            className="py-4 lg:max-w-2xl"
          >
            Prime Systems is a manufacturer organization where we provide the
            best computer parts around the whole world. we beleive and focus on
            quality and performance also we love to inevent new technology and
            share our work to the world.
          </p>
          <button
            data-aos="zoom-in"
            data-aos-delay="1200"
            onClick={() => navigate("/availableparts")}
            className="btn btn-primary text-uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
          >
            Get Started
          </button>
        </div>
        <img src={banner} className="lg:max-w-lg rounded-lg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
