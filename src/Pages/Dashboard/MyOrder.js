import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/get-purchase?userEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setOrders(data);
        });
    }
  }, [user]);
  return (
    <div>
      <h2 className="text-2xl">Orders : {orders.length}</h2>
      <div class="overflow-x-auto">
        <table class="table  table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Parts</th>
              <th>Email</th>
              <th>Total Price</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{order.userName}</td>
                <td>{order.partsName}</td>
                <td>{order.userEmail}</td>
                <td>${order.totalPrice}</td>
                <td>
                  {order?.price && !order?.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button class="btn btn-success text-white btn-xs">
                        Pay
                      </button>
                    </Link>
                  )}
                </td>
                <td>
                  {order?.price && order?.paid && (
                    <>
                      <span className="text-info">Paid</span>
                      <p>
                        <span className="text-error">
                          Transaction Id : {order.transactionId}
                        </span>
                      </p>
                    </>
                  )}
                </td>
                <td>
                  <button class="btn btn-error text-white btn-xs">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
