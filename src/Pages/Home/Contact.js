import React from "react";
import PrimaryButton from "../../components/PrimaryButton";

const Contact = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div class="hero h-full bg-base-100">
        <div class="hero-content flex-col lg:flex-row">
          <div class="text-start lg:text-start">
            <h1 class="text-5xl font-bold">Let's chat.</h1>
            <p class="py-6 w-4/5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              totam vel ratione culpa similique quam mollitia alias eius eum.
              Dolore quia voluptate architecto, quidem ab nesciunt dolorum
              impedit eius! Ipsa?
            </p>
            <p>let's make the world better together! </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm lg:max-w-lg shadow-2xl bg-base-100">
            <div className="card-body">
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full max-w-md"
              />
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full max-w-md"
              />
              <textarea
                className="textarea input-bordered w-full max-w-md"
                placeholder="Your message"
                rows={6}
              ></textarea>
              <PrimaryButton>Sumbit</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
