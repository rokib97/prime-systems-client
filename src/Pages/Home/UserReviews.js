import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import Review from "./Review";

const UserReviews = () => {
  const { data: reviews, isLoading } = useQuery("review", () =>
    fetch("http://localhost:5000/get-review").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mt-16 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-16">
        Reviews And Feedback
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {reviews &&
          reviews
            .slice(0, 6)
            .map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
      </div>
    </div>
  );
};

export default UserReviews;
