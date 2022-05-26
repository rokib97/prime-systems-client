import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      education: e.target.education.value,
      location: e.target.location.value,
      phone: e.target.phone.value,
      country: e.target.country.value,
      linkedin: e.target.linkedin.value,
      yourself: e.target.yourself.value,
    };
    axios
      .put(`https://fast-river-88547.herokuapp.com/user/${user.email}`, data)
      .then((res) => {
        navigate("/dashboard");
        toast.success(" Profile Updated Successfully");
      });
    e.target.reset();
  };
  return (
    <div>
      <h2 className="text-2xl">Update Your Profile Here</h2>
      <div className="h-full w-full bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-full max-w-sm lg:max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <input
                  type="text"
                  name="education"
                  placeholder="Education"
                  className="input input-bordered w-full max-w-md"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="input input-bordered w-full max-w-md"
                />
                <input
                  type="number"
                  name="phone"
                  required
                  placeholder="Phone number"
                  className="input input-bordered w-full max-w-md"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  className="input input-bordered w-full max-w-md"
                />
                <input
                  type="text"
                  name="linkedin"
                  placeholder="LinkedIn Profile"
                  className="input input-bordered w-full max-w-md"
                />
                <textarea
                  name="yourself"
                  className="textarea input-bordered w-full max-w-md"
                  placeholder="About Yourself"
                  rows={4}
                ></textarea>
                <button className="btn btn-primary text-uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
