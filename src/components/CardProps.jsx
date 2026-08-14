import React from "react";

const CardProps = ({nama, harga}) => {
  return (
    <>
      <div className="flex flex-col w-100 h-50 p-4 bg-black rounded-lg shadow-md">
        <h1 className="text-white text-left text-2xl">{nama}</h1>
        <p className="text-white text-left text-lg">Harga: {harga}</p>
      </div>
    </>
  );
};

export default CardProps;
