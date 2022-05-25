import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import UserRow from "./UserRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        "content-type": "application/jason",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-2xl">All Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-normal w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UserRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
