import { useState } from "react";

export const Zad3 = (props) => {
  const [show, setShow] = useState(false);

  const { columns, data } = props;

  const showDetails = () => {
    return Object.values(data).map((el) => {
      return (
        <div>
          <p>{el.street}</p>
          <p>{el.suite}</p>
          <p>{el.city}</p>
          <p>{el.zipcode}</p>
          <p>{el.name}</p>
          <p>{el.catchPhrase}</p>
          <p>{el.bs}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Zad3</h1>
      <p>{columns[1]}</p>
      <p>{columns[2]}</p>
      <p>{columns[3]}</p>
      <p>{columns[5]}</p>
      <div>{show ? showDetails() : null}</div>
      <button onClick={() => setShow(!show)}>details</button>
    </div>
  );
};
