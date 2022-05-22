import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar bg-base-100 shadow-xl relative z-50 lg:px-12">
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
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/availableparts">Available Parts</NavLink>
            </li>

            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>

            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>

            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" class="btn btn-ghost normal-case text-xl font-bold">
          Computer Parts
        </Link>
      </div>
      <div class="navbar-end hidden lg:flex font-bold ">
        <ul class="menu menu-horizontal p-0 gap-2">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/availableparts">Available Parts</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>

          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>

          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
