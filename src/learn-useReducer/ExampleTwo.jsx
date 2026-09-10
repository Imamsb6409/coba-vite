import React, { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "INCREMENT") return state + 1;
  else if (action.type === "DECREMENT") return state - 1;
  return state;
}

function ExampleTwo() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <br />
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default ExampleTwo;

/**
 * algortima
 * kliktombol
 * ⬇️
 * dispacth()
 * ⬇️
 * reducer()
 * ⬇️
 * state + 1
 * ⬇️
 * angka berubah
 */