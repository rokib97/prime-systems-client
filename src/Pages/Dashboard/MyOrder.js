import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
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
      <h2 className="2xl">Orders : {orders.length}</h2>
    </div>
  );
};

export default MyOrder;
