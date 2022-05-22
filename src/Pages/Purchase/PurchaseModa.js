import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const PurchaseModa = ({ singleParts, refetch }) => {
  const { _id, name, price, img, desc, minOrderQuantity, availQuantity } =
    singleParts || {};
  const [user] = useAuthState(auth);
  const handlePurchase = (event) => {
    event.preventDefault();
    const userQuantity = event.target.quantity.value;
    if (userQuantity < minOrderQuantity) {
      toast.error(
        `You can not order less than min order quantity${minOrderQuantity}`
      );
    }
    const updatedQuantity = availQuantity - userQuantity;
    fetch(`http://localhost:5000/get-parts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ availQuantity: updatedQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
      });
  };
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
            onSubmit={handlePurchase}
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
              type="number"
              name="quantity"
              placeholder={`Select at least min quantity ${minOrderQuantity}`}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Confirm Purchase"
              className="btn btn-secondary bg-gradient-to-r from-secondary to-primary w-full max-w-xs text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModa;
