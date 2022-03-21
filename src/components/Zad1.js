import { useState } from "react";

const initialData = {
  human: {
    sex: "man",
    surname: "Detic",
  },
  accountBalance: 1000,
};

export const Zad1 = () => {
  const [initialState, setInitialState] = useState(initialData);

  const handleBuy = () => {
    setInitialState((prevValue) => ({
      ...prevValue,
      accountBalance: prevValue.accountBalance - 500,
    }));
  };
  const handleSell = () => {
    setInitialState((prevValue) => ({
      ...prevValue,
      accountBalance: prevValue.accountBalance + 500,
    }));
  };

  const handleSexChange = () => {
    setInitialState((prevValue) => ({
      ...prevValue,
      sex: prevValue.human.sex === "man" ? "woman" : "man",
    }));
  };

  return (
    <div>
      <p>{initialState.human.sex}</p>
      <p>{initialState.human.surname}</p>
      <div>
        <p>{initialState.accountBalance}</p>
        <button onClick={handleBuy}>Buy</button>
        <button onClick={handleSell}>Sell</button>
        <button onClick={handleSexChange}>changeSex</button>
      </div>
    </div>
  );
};
