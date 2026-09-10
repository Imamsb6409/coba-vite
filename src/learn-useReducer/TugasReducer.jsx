import React, { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "TAMBAH") return state + 1;
  else if (action.type === "KURANG") return state - 1;
  else if (action.type === "RESET") return 0;
  return state;
}

function TugasReducer() {
  const [angka, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p className="m-2">Angka: {angka}</p>
      <button
        className="bg-black text-white px-4 py-1 rounded-lg m-2"
        onClick={() => dispatch({ type: "TAMBAH" })}
      >
        Tambah
      </button>
      <br />
      <button
        className="bg-black text-white px-4 py-1 rounded-lg m-2"
        onClick={() => dispatch({ type: "KURANG" })}
      >
        Kurang
      </button>
      <br />
      <button
        className="bg-black text-white px-4 py-1 rounded-lg m-2"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
}

export default TugasReducer;
