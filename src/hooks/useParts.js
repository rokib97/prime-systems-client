import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/get-parts`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setParts(data);
      });
  }, []);
  return [parts];
};

export default useParts;
