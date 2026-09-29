import React from "react";
import useAuthStore from "./Auth/store/useAuthStore";
import { useShallow } from "zustand/shallow";

function DashboardUser() {
  //   cara 1
  //   const username = useAuthStore((state) => state.username);
  //   const role = useAuthStore((state) => state.role);
  //   const count = useAuthStore((state) => state.count);
  //   const increment = useAuthStore((state) => state.increment);
  //   const decrement = useAuthStore((state) => state.decrement);

  //   cara2
  const { username, role, count, increment, decrement } = useAuthStore();

  return (
    <div>
      <h1>DashboardUser</h1>
      <h2>Nama: {username}</h2>
      <p>Role: {role}</p>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment Count</button>
      <br />
      <button onClick={decrement}>Decrement Count</button>
    </div>
  );
}

export default DashboardUser;
