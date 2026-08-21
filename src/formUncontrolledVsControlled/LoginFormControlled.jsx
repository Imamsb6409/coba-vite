import React, { useState } from "react";

function LoginFormControlled() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(``);

  let passwordHandler = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  let phoneHandler = (e) => {
    setPhone(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <form className="flex flex-col gap-y-3 items-start">
        <input
          type="text"
          name="username"
          className="border border-blue-200"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
            console.log(event.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          className="border border-blue-200"
          value={password}
          onChange={passwordHandler}
        />
        <input
          type="number"
          name="phone"
          className="border border-blue-200"
          value={phone}
          onChange={phoneHandler}
          id=""
        />
        <button type="submit">Login</button>
        <h2>{username}</h2>
        <h2>{password}</h2>
        <h2>{phone}</h2>
      </form>
    </div>
  );
}

export default LoginFormControlled;
