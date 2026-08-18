import React, { useRef } from "react";

function Basic() {
  const inputRef = useRef(null);

  function fokusInput() {
    inputRef.current.focus(); //?menyuruh fokus ke input
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={fokusInput}>menyuruh fokus ke input</button>
    </div>
  );
}

export default Basic;
