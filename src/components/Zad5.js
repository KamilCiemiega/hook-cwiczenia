import { useRef } from "react";

export const Zad5 = () => {
  const handleClick = () => {
    const useTaskInput = useRef();
  };

  return (
    <div>
      <h1>Zad5</h1>
      <button onClick={handleClick} ref={useTaskInput}>
        Click
      </button>
    </div>
  );
};
