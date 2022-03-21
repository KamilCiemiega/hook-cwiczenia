import { useEffect } from "react";
import { useHttp } from "./useHttp";

export const Zad4 = () => {
  const { isLoading, data, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest("https://jsonplaceholder.typicode.com/posts");
  }, []);

  return (
    <div>
      <h1>Zad4</h1>
      {isLoading ? <p>Loading...</p> : null}
    </div>
  );
};
