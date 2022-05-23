import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    console.log(user);
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/jason",
        },
        body: JSON.stringify(currentUser),
      });
    }
  }, [user]);
  return [token];
};
export default useToken;
