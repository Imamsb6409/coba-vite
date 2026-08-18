import React, { useState, useRef } from "react";

function Dasar() {
  const [angka, setAngka] = useState(0);
  const inputRef = useRef();

  const tombolDiklik = () => {
    if (inputRef.current.classList.contains("animate-spin")) {
      inputRef.current.classList.remove("animate-spin");
    } else {
      inputRef.current.classList.add("animate-spin");
    }
  };

  function tambahAngka() {
    setAngka(angka + 1);
    console.log(angka + 1); //?mengupdate
  }

  return (
    <div className="flex flex-col items-start gap-y-5">
      <div>
        <h1 className="text-2xl">Bisa Menyimpan Data</h1>
        <p>{angka}</p>
        <button onClick={tambahAngka} className="cursor-pointer">
          tambah
        </button>
      </div>
      <div>
        <h1 className="text-2xl">coba UseRef</h1>
        <div ref={inputRef} className="bg-black w-10 h-10"></div>
        <button onClick={tombolDiklik}>Fokus ke Input!</button>
      </div>
    </div>
  );
}

export default Dasar;
