import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loading from "../../components/Loading";
const ManageAllOrder = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("http://localhost:5000/get-allpurchase", {
      method: "GET",
      headers: {
        "content-type": "application/jason",
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
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
        const url = `http://localhost:5000/delete-purchase/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const handlePending = (id) => {
    fetch(`http://localhost:5000/update-purchase-status/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success("Payment Status Changed Successfully");
      });
  };
  return (
    <div>
      <h2 className="text-2xl">Manage All Order</h2>
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
            {orders?.map((order, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{order.userName}</td>
                <td>{order.partsName}</td>
                <td>{order.userEmail}</td>
                <td>${order.totalPrice}</td>
                <td>
                  {order?.price && !order?.paid && (
                    <span className="text-info">Unpaid</span>
                  )}
                </td>
                <td>
                  {order?.price && order?.paid && (
                    <>
                      <button
                        disabled={order?.shipping === true}
                        onClick={() => handlePending(order._id)}
                        class="btn btn-success text-white btn-xs"
                      >
                        {order?.shipping ? "Shipped" : "Pending"}
                      </button>
                    </>
                  )}
                </td>
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

export default ManageAllOrder;
