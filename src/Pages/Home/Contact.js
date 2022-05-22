import React from "react";
import contactbg from "../../assets/images/lilzidesigns-HhTfeSKz4xQ-unsplash.jpg";
import PrimaryButton from "../../components/PrimaryButton";

const Contact = () => {
  return (
    <div
      style={{
        background: `url(${contactbg})`,
        backgroundSize: "cover",
      }}
      className="mt-16"
    >
      <h2 className="text-3xl font-bold text-center mb-16">Contact Us</h2>
      <div className="grid grid-cols-1 justify-items-center gap-5">
        <input
          type="email"
          placeholder="Email Address"
          className="input w-full max-w-md"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input w-full max-w-md"
        />
        <textarea
          className="textarea w-full max-w-md"
          placeholder="Your message"
          rows={6}
        ></textarea>
        <PrimaryButton>Sumbit</PrimaryButton>
      </div>
    </div>
  );
};

export default Contact;
