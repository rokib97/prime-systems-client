import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
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
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="mb-1">
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li className="mb-1">
            <Link to="/dashboard/review">Add A Review</Link>
          </li>
          <li className="mb-1">
            <Link to="/dashboard/profile">My Profile</Link>
          </li>
          {/* <li>
            {admin && (
              <>
                <Link className="mb-1" to="/dashboard/users">
                  All Users
                </Link>
                <Link className="mb-1" to="/dashboard/addDoctor">
                  Add A Doctor
                </Link>
                <Link to="/dashboard/manageDoctor">Manage Doctors</Link>
              </>
            )}
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
