import { useState, useEffect } from "react";

export const Zad2 = () => {
  const [data, setData] = useState([]);

  const fetchDataHandler = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  return <div>Zad2</div>;
};
