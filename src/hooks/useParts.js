import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch(`https://fast-river-88547.herokuapp.com/get-parts`)
      .then((res) => res.json())
      .then((data) => {
        setParts(data);
      });
  }, []);
  return [parts];
};

export default useParts;
