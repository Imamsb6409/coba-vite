import React, { useRef } from "react";

function LoginFormWithUseReff() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handlerSubmit} className="flex flex-col">
        <input
          ref={usernameRef}
          type="text"
          name="username"
          className="border border-blue-200"
          id=""
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          className="border border-blue-200"
          id=""
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginFormWithUseReff;

// form uncontrolled component
// uncontrolled component adalh component yang tidak terkontrol oleh react dan nilai dicontrol oleh browser DOM
