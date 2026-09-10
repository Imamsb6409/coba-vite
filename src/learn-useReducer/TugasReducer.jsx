import React, { useReducer } from 'react'

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
        <p>Angka: {angka}</p>
        <button onClick={() => dispatch({ type: "TAMBAH" })}>Tambah</button>
        <button onClick={() => dispatch({ type: "KURANG" })}>Kurang</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  )
}

export default TugasReducer