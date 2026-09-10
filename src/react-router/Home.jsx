import React from "react";
import { NavLink, Link } from "react-router";

function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <nav>
        <NavLink to="/" className="hover:underline text-blue-500">
          Home
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Profile
        </NavLink>
      </nav>
      <h1 className="font-bold text-2xl">Halaman Home</h1>
      <Link className="hover:underline text-blue-500" to="/profile">
        Profile
      </Link>
      <Link className="hover:underline text-red-500 text-lg mt-10" to="*">
        coba error
      </Link>
    </div>
  );
}

export default Home;
