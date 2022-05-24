import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  console.log(user);
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
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
