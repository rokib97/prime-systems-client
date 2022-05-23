import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashbord-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <h1 className="text-3xl font-bold text-info">
          Welcome to Your Dashboard
        </h1>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label for="dashbord-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {!admin && (
            <>
              {" "}
              <li className="mb-1">
                <Link to="/dashboard">My Orders</Link>
              </li>
              <li className="mb-1">
                <Link to="/dashboard/review">Add A Review</Link>
              </li>
              <li className="mb-1">
                <Link to="/dashboard/profile">My Profile</Link>
              </li>
            </>
          )}
          {admin && (
            <>
              <li className="mb-1">
                <Link to="/dashboard/admin">Make Admin</Link>
              </li>
              <li className="mb-1">
                <Link to="/dashboard/profile">My Profile</Link>
              </li>
              <li className="mb-1">
                <Link to="/dashboard/addproduct">Add A Product</Link>
              </li>
              <li className="mb-1">
                <Link to="/dashboard/manageorder">Manage Orders</Link>
              </li>
              <li className="mb-1">
                <Link to="/dashboard/manageproduct">Manage Products</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
