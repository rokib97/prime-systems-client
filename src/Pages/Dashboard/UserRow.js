import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch, index }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://fast-river-88547.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/jason",
      },
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        refetch();
        toast.success("Successfully Make an Admin");
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
