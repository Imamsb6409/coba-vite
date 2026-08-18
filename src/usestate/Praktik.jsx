import React, { useState } from "react";

function Praktik() {
  const [nilai, useNilai] = useState(1);

  function tambah() {
    useNilai(nilai + 1);
  }
  function tambahDua() {
    useNilai(nilai + 2);
  }

  return (
    <div>
      <h1 className="text-2xl">Praktik</h1>
      <p>Nilai : {nilai}</p>

      <button onClick={tambah} className="px-7 py-1 rounded-2xl bg-gray-400">
        +
      </button>
      <br />
      <button onClick={tambahDua} className="px-7 py-1 rounded-2xl bg-gray-400">
        +2
      </button>
      <br />
      <button
        onClick={() => {
          useNilai(nilai + 3);
        }}
        className="px-7 py-1 rounded-2xl bg-gray-400"
      >
        +3
      </button>
    </div>
  );
}

export default Praktik;
