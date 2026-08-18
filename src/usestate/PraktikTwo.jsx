import React, { useState } from "react";

function PraktikTwo() {
  const [name, setName] = useState("");

  function changeName() {
    setName("fulan");
  }

  return (
    <div>
      <div>{name ? name : "Ali"}</div>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default PraktikTwo;
