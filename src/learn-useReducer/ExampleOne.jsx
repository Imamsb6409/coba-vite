import React, { useState } from "react";

function ExampleOne() {
  const [angka, setAngka] = useState(0);

  return (
    <div>
      <h1>{angka}</h1>
      <button
        onClick={() => setAngka(angka + 1)}
        className="bg-black text-white px-4 py-1 rounded-lg m-2"
      >
        tambah
      </button>
      <br />
      <button
        onClick={() => setAngka(angka - 1)}
        className="bg-black text-white px-4 py-1 rounded-lg m-2"
      >
        kurang 1
      </button>
      <br />
      <button
        onClick={() => setAngka(angka + 5)}
        className="bg-black text-white px-4 py-1 rounded-lg m-2"
      >
        tambah 5
      </button>
      <br />
      <button
        onClick={() => setAngka(angka - 5)}
        className="bg-black text-white px-4 py-1 rounded-lg m-2"
      >
        kurang 5
      </button>
      <br />
      <button
        onClick={() => setAngka(0)}
        className="bg-black text-white px-4 py-1 rounded-lg m-2"
      >
        reset
      </button>
    </div>
  );
}

export default ExampleOne;
