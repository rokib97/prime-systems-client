import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Parts from "./Parts";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner />
      <Parts />
      <Summary />
      <Contact />
    </div>
  );
};

export default Home;
