import React from "react";
import banner from "../../assets/images/banner.jpg";
import PrimaryButton from "../../components/PrimaryButton";
const Banner = () => {
  return (
    <div class="hero h-full lg:h-[80vh] bg-base-100">
      <div class="hero-content flex-col lg:flex-row">
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
            corporis! Pariatur voluptatem, corporis officia est odio a eos,
            saepe nihil obcaecati corrupti at ratione voluptates. Nulla esse
            necessitatibus delectus consequatur.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
        <img src={banner} class="lg:max-w-lg rounded-lg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
