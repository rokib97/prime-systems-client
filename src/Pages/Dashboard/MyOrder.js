import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
const MyOrder = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(
        `https://fast-river-88547.herokuapp.com/get-purchase?userEmail=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.ststus === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user, navigate]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://fast-river-88547.herokuapp.com/delete-purchase/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = orders.filter((product) => product._id !== id);
            setOrders(remaining);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      <h2 className="text-2xl">Your Orders : {orders.length}</h2>
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
              <th>Shipping Status</th>
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
                          Trans Id :
                          <br />
                          <span className="text-success">
                            {order.transactionId}
                          </span>
                        </span>
                      </p>
                    </>
                  )}
                </td>
                <td>{order?.shipping ? "Shipped" : "Pending"}</td>
                <td>
                  <button
                    onClick={() => handleDelete(order._id)}
                    disabled={order.paid === true}
                    class="btn btn-error text-white btn-xs"
                  >
                    Cancel
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
