import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const PurchaseModa = ({ singleParts, refetch }) => {
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState("");
  const { _id, name, price, img, minOrderQuantity, availQuantity } =
    singleParts || {};

  const newQuantity = parseInt(quantity) || 0;
  const newMinQuantity = parseInt(minOrderQuantity);
  const newavlQuantity = parseInt(availQuantity);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (newQuantity < newMinQuantity) {
      setError(`Min Order Quantity is ${newMinQuantity}`);
    } else if (newQuantity > newavlQuantity) {
      setError(`Max Order Quantity is ${newavlQuantity}`);
    } else {
      setError("");
    }
  }, [newQuantity, newMinQuantity, newavlQuantity]);

  const handlePurchase = (event) => {
    event.preventDefault();
    let order = {
      partsId: _id,
      partsName: name,
      quantity: quantity || minOrderQuantity,
      userName: user.displayName,
      userEmail: user.email,
      img,
      price,
      phone: event.target.phone.value,
    };

    const totalPrice = order.quantity * order.price;
    order = { ...order, totalPrice };

    // purchse order
    fetch("https://prime-system.onrender.com/add-purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Order Placed Successfully");
      });

    //update wuantity
    const updatedQuantity = availQuantity - quantity;
    fetch(`https://prime-system.onrender.com/update-parts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ availQuantity: updatedQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });

    event.target.reset();
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
              onChange={(e) => setQuantity(e.target.value)}
              placeholder={`Min Order Quantity is ${minOrderQuantity}`}
              className="input input-bordered w-full max-w-xs"
            />
            {quantity ? <p className="text-red-500">{error}</p> : ""}
            <input
              type="submit"
              value="Confirm Purchase"
              disabled={
                newQuantity < newMinQuantity || newQuantity > newavlQuantity
              }
              className="btn btn-secondary bg-gradient-to-r from-secondary to-primary w-full max-w-xs text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModa;
