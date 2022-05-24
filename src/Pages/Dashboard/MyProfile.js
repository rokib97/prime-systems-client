import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { data: users, isLoading } = useQuery("available", () =>
    fetch(`http://localhost:5000/user/${user.email}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  const { _id } = users;
  return (
    <div>
      <h2 className="text-2xl mb-2">Welcome Your Profile</h2>
      <div className="card mx-auto lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-center mt-8">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                  }
                  alt=""
                />
              </div>
            </div>
            <div>
              <h2 className="card-title">Name: {user?.displayName}</h2>
              <p>Email: {user.email}</p>
            </div>
          </div>
          <div class="card-actions justify-end">
            <Link to={`updateprofile/${_id}`}>
              <button class="btn btn-primary text-uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
                Update Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
