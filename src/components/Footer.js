import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const yearNow = new Date().getFullYear();
  return (
    <footer class=" p-10 mt-20 shadow-2xl bg-base-100 text-base-content">
      <div className="footer">
        <div className="lg:ml-32">
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Branding
          </Link>
          <Link to="/" className="link link-hover">
            Design
          </Link>
          <Link to="/" className="link link-hover">
            Marketing
          </Link>
          <Link to="/" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Jobs
          </Link>
          <Link to="/" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" className="link link-hover">
            Cookie policy
          </Link>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none bg-gradient-to-r from-secondary to-primary text-white font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer footer-center p-4 text-base-content mt-6">
        <p>Copyright © {yearNow} - All right reserved by Prime Systems Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
