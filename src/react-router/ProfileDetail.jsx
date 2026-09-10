import React from "react";
import { useParams } from "react-router";

const santri = {
  1: "ahmad",
  2: "albar",
  3: "naufal",
};

function ProfileDetail() {
  // kegunaannya untuk mengambil data dari url
  const { id } = useParams();
  console.log(id);
  
  const name = santri[id];

  return (
    <div>
      ProfileDetail
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </div>
  );
}

export default ProfileDetail;
