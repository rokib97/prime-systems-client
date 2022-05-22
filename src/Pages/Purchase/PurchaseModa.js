import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const PurchaseModa = ({ singleParts }) => {
  const { name, price, img, desc, minOrderQuantity, availQuantity } =
    singleParts || {};
  const [user] = useAuthState(auth);
  return (
    <div>
      <input type="checkbox" id="purchase-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="purchase-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">{name}</h3>
          <form
            // onSubmit={handleBooking}
            className="grid grid-cols-1 gap-4 justify-items-center my-8"
          >
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <textarea
              className="textarea input-bordered w-full max-w-xs"
              placeholder="Your address"
              rows={2}
            ></textarea>
            <input
              type="text"
              name="quantity"
              value={minOrderQuantity}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary bg-gradient-to-r from-secondary to-primary w-full max-w-xs text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModa;
