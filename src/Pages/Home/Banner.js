import React from "react";
import banner from "../../assets/images/banner.png";
import PrimaryButton from "../../components/PrimaryButton";
const Banner = () => {
  return (
    <div class="hero h-full lg:h-[80vh] bg-base-100">
      <div class="hero-content flex-col lg:flex-row">
        <div>
          <h1 class="text-5xl font-bold">Delivering a Better Tomorrow!</h1>
          <p class="py-4 lg:max-w-2xl">
            Prime Systems is a manufacturer organization where we provide the
            best computer parts around the whole world. we beleive and focus on
            quality and performance also we love to inevent new technology and
            share our work to the world.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
        <img src={banner} class="lg:max-w-lg rounded-lg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
