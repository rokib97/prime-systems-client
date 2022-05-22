import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Parts from "./Parts";
import Summary from "./Summary";
import UserReviews from "./UserReviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Parts />
      <Summary />
      <UserReviews />
      <Contact />
    </div>
  );
};

export default Home;
