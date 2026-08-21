import React from "react";

function LoginForm() {
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.username.value);
    console.log(e.target.elements.password.value);
  };

  return (
    <div>
      <form onSubmit={handlerSubmit} className="flex flex-col">
        <input
          type="text"
          name="username"
          className="border border-blue-200"
          id=""
        />
        <input
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

export default LoginForm;

// form uncontrolled component
// uncontrolled component adalh component yang tidak terkontrol oleh react dan nilai dicontrol oleh browser DOM
