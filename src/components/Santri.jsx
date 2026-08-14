import React from "react";

const Santri = ({nama,kelas,hobi,aktif}) => {
  return (
    <>
      <div className="p-4  border-2 w-max min-w-50">
        <h1 className="text-black text-left text-2xl">{nama}</h1>
        <p className="text-lg">Kelas: {kelas}</p>
        <p className="text-lg">Hobi: {hobi}</p>
        <p className="text-lg">Aktif: {aktif ? "Ya" : "Tidak"}</p>
      </div>
    </>
  );
};

export default Santri;
