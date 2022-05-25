import React from "react";
import { FaGraduationCap, FaMailBulk } from "react-icons/fa";
import myself from "../../assets/images/person-0.png";
const MyPortfolio = () => {
  return (
    <>
      <section class="hero h-full bg-base-100">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <p className="text-xl">HEY! THERE</p>
            <h1 class="text-5xl font-bold">I'M ROKIBUL HASN ROKIB</h1>
            <p className="text-xl font-bold mb-2">FRONT END DEVELOPER</p>
            <div className="flex mb-3">
              <FaMailBulk size={25} />
              <p className="ml-4">hasanrokib1997@gmail.com</p>
            </div>
            <div className="flex">
              <FaGraduationCap size={25} />
              <p className="ml-4">
                BSc in CSE at Green University Of Bangladesh
              </p>
            </div>
            <p className="my-2">I am good at -</p>
            <div className="mb-1 ">
              <button class="btn btn-xs mr-2 btn-primary text-white">
                HTML5
              </button>
              <button class="btn btn-xs mr-2 btn-secondary text-white">
                CSS3
              </button>
              <button class="btn btn-xs mr-2 btn-info text-white">
                Bootstrap5
              </button>
              <button class="btn btn-xs mr-2 btn-accent text-white">
                JavaScript
              </button>
              <button class="btn btn-xs mr-2 btn-success text-white">
                ES6
              </button>
              <button class="btn btn-xs mr-2 btn-warning text-white">
                DOM
              </button>
              <button class="btn btn-xs mr-2 btn-error text-white">
                REST API
              </button>
            </div>
            <div>
              <button class="btn btn-xs mr-2 btn-error text-white">
                React
              </button>
              <button class="btn btn-xs mr-2 btn-warning text-white">
                React Router
              </button>
              <button class="btn btn-xs mr-2 btn-success text-white">
                React Hook
              </button>
              <button class="btn btn-xs mr-2 btn-accent text-white">
                Node JS
              </button>
              <button class="btn btn-xs mr-2 btn-info text-white">
                Express JS
              </button>
              <button class="btn btn-xs mr-2 btn-secondary text-white">
                Firebase
              </button>
              <br />
              <button class="btn btn-xs mr-2 btn-primary mt-1 text-white">
                MongoDB
              </button>
            </div>
          </div>
          <img src={myself} class="lg:max-w-lg rounded-lg w-96" alt="" />
        </div>
      </section>
      <section className="mt-16 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-16">
          Latest Projects
        </h2>

        <div class="card lg:card-side bg-base-100 shadow-xl mb-12">
          <div class="card-body">
            <h1 className="text-3xl font-bold text-primary">
              Infinity Electronics
            </h1>
            <p>
              1. Warehouse Management Website where users can add , update, and
              delete products and update products quantity.
              <br />
              2. Users can sign up and login into the website using google and
              github, anyone can not go to some pages without login which is
              developed by React Router.
              <br />
              3. Each unique user has his/her own inventory where the user can
              manage only his/her own products.
            </p>
            <h2 className="text-2xl font-bold">Code Link</h2>
            <p>
              <a
                href="https://github.com/rokib97/infinity-electronics-gadget-client"
                class="link font-bold no-underline text-info
                "
              >
                Github Client
              </a>
            </p>
            <p>
              <a
                href="https://github.com/rokib97/infinity-electronics-gadget-server"
                class="link font-bold no-underline text-error
                "
              >
                Github Server
              </a>
            </p>
            <div class="card-actions justify-end">
              <a
                href="https://infinity-electronics-gadget.web.app/"
                class=" link font-bold no-underline btn btn-primary bg-gradient-to-r from-secondary to-primary text-white mt-2
                "
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
        <div class="card lg:card-side bg-base-100 shadow-xl mb-12">
          <div class="card-body">
            <h1 className="text-3xl font-bold text-primary">Health Coach</h1>
            <p>
              1. Individual Service Provider website where users can book any
              services when they are logged in.
              <br />
              2. Users can sign up and login into the website using google and
              github which is developed by Firebase authentication.
              <br />
              3. Without a login user does not have access to book any service.
            </p>
            <h2 className="text-2xl font-bold">Code Link</h2>
            <p>
              <a
                href="https://github.com/rokib97/health-coach"
                class="link font-bold no-underline text-info
                "
              >
                Github Code
              </a>
            </p>
            <div class="card-actions justify-end">
              <a
                href="https://health-coach-4ffb0.web.app/"
                class="link font-bold no-underline btn btn-primary bg-gradient-to-r from-secondary to-primary text-white mt-2
                "
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <div class="card-body">
            <h1 className="text-3xl font-bold text-primary">Money Assistant</h1>
            <p>
              1. Money Assistant is a Expense Tracker website where anyone can
              calculate their expenses based on their income amount.
              <br />
              2. Anyone can calculate their balance and saving amount based on
              their expenses and saving rate.
            </p>
            <h2 className="text-2xl font-bold">Code Link</h2>
            <p>
              <a
                href="https://github.com/rokib97/money-assistant"
                class="link font-bold no-underline text-info
                "
              >
                Github Code
              </a>
            </p>
            <div class="card-actions justify-end">
              <a
                href="https://relaxed-beaver-37d55b.netlify.app/"
                class="link font-bold no-underline btn btn-primary bg-gradient-to-r from-secondary to-primary text-white mt-2"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyPortfolio;
