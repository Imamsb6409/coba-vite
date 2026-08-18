import React, { useState, useRef } from "react";

function TugasUseStateAndRef() {
  const inputRef = useRef(null);
  const [nama, setNama] = useState("");

  function rubahNama() {
    setNama(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <div className="flex flex-col gap-y-5 items-start p-5 ">
      <input
        type="text"
        name="namaOrang"
        id="nama"
        ref={inputRef}
        placeholder="Masukkan Nama..."
        className="border-2 border-black"
      />
      <button
        onClick={rubahNama}
        className="bg-blue-400 text-white px-5 py-2 rounded-lg"
      >
        Tampilkan Nama
      </button>
      <h2>Nama: {nama ? nama : "-"}</h2>
    </div>
  );
}

export default TugasUseStateAndRef;
