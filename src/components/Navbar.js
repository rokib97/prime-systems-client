import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../firebase.init";
const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div class="navbar bg-base-100 sticky top-0 shadow-xl z-50 py-3 lg:px-12">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/availableparts">Available Parts</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            )}
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>

            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/portfolio">{user.displayName}</NavLink>
              </li>
            )}
            {user ? (
              <li>
                <NavLink onClick={() => signOut(auth)} to="/login">
                  LogOut
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
        <Link to="/" class="btn btn-ghost normal-case text-xl font-bold">
          Prime Systems
        </Link>
      </div>
      <div className="navbar-end">
        <label
          tabIndex="1"
          for="dashbord-sidebar"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
      <div class="navbar-center hidden lg:flex font-bold ">
        <ul class="menu menu-horizontal p-0 gap-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/availableparts">Available Parts</NavLink>
          </li>
          {user && (
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          )}
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>

          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>

          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img
                  src="https://api.lorem.space/image/face?hash=33791"
                  alt=""
                />
              </div>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user && (
                <li>
                  <NavLink to="/portfolio">{user.displayName}</NavLink>
                </li>
              )}
              {user ? (
                <li>
                  <NavLink onClick={() => signOut(auth)} to="/login">
                    LogOut
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
