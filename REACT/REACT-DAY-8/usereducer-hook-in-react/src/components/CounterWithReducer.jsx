import { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const CounterWithReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Dec
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
    </>
  );
};
