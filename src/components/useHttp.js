import { useState } from "react";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const sendRequest = async (requestConfig) => {
    setIsLoading(true);

    const response = await fetch(requestConfig);
    if (!response.ok) {
      throw new Error("Request failed!");
    }
    const data = await response.json();
    setData(data);

    setIsLoading(false);
  };

  return {
    isLoading,
    data,
    sendRequest,
  };
};
