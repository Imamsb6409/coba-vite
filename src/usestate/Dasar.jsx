import React from "react";

function Dasar() {
    
  let angka = 0;

  function tambah() {
    angka = angka + 1;
    console.log(angka);
  }

  return (
    <div>
      <h1 className="text-2xl">Tidak menyimpan Data</h1>
        <p>{angka}</p>
      <button onClick={tambah} className="cursor-pointer">tambah</button>
    </div>
  );
}

export default Dasar;
