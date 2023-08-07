import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch(`https://prime-systems-server.vercel.app/get-parts`)
      .then((res) => res.json())
      .then((data) => {
        setParts(data);
      });
  }, []);
  return [parts];
};

export default useParts;
