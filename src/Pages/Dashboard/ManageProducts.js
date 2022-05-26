import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch(`https://fast-river-88547.herokuapp.com/get-adminparts`)
      .then((res) => res.json())
      .then((data) => {
        setParts(data);
      });
  }, []);
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
        const url = `https://fast-river-88547.herokuapp.com/delete-parts/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = parts.filter((product) => product._id !== id);
            setParts(remaining);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      <h2 className="text-2xl">All Products: {parts.length}</h2>
      <div class="overflow-x-auto">
        <table class="table  table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Min Order Quantity</th>
              <th>Available Quantity</th>
              <th> Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{part.name}</td>

                <td>{part.minOrderQuantity}</td>
                <td>{part.availQuantity}</td>
                <td>${part.price}</td>

                <td>
                  <button
                    onClick={() => handleDelete(part._id)}
                    class="btn btn-error text-white btn-xs"
                  >
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

export default ManageProducts;
