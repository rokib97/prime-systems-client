import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import FeaturedParts from "./FeaturedParts";
import Parts from "./Parts";
import Summary from "./Summary";
import UserReviews from "./UserReviews";

const Home = () => {
  return (
    <>
      <Banner />
      <Parts />
      <FeaturedParts />
      <Summary />
      <UserReviews />
      <Contact />
    </>
  );
};

export default Home;
