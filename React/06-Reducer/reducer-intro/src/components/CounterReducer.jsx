import React, { useReducer } from "react";

function reducer(state,action){
    switch(action){
        case "INCREMENT":
            console.log(state)
            return state + 1;
        case "DECREMENT":
            console.log(state)
            return state - 1;
        case "RESET" : 
        console.log(state)
            return 0;
        default :
            return state
    }
}

const counter = 0

const CounterReducer = () => {

    const [state,dispatch] = useReducer(reducer,counter);
//   const [counter, setCounter] = useState(0);

//   const decrement = () => {
//     setCounter(counter - 1);
//   };
//   const increment = () => {
//     setCounter(counter + 1);
//   };
//   const reset = () => {
//     setCounter(0);
//   };
  return (
    <>
      <h2>Counter Reducer</h2>
      <h3>Counter : {state}</h3>
      <button onClick={() => dispatch("DECREMENT")}>--</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
      <button onClick={() => dispatch("INCREMENT")}>++</button>
    </>
  );
};

export default CounterReducer;
