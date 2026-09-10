import React from "react";
import { Link } from "react-router";

function ErrorPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="font-bold text-9xl">404 <span>👀</span></h2>
      <h1 className="font-bold text-2xl">Not Found</h1>
      <Link className="hover:underline text-blue-500" to="/">
        Home
      </Link>
    </div>
  );
}

export default ErrorPage;
