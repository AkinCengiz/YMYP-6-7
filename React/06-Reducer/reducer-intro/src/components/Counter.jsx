import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    setCounter(counter - 1);
  };
  const increment = () => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <h2>Counter State</h2>
      <h3>Counter : {counter}</h3>
      <button onClick={decrement}>--</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>++</button>
      <br />
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        --
      </button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={() => setCounter(counter + 1)}>++</button>
    </>
  );
};

export default Counter;
