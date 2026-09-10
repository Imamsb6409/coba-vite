import { IconJarLogoIcon } from "@radix-ui/react-icons";
import React from "react";
import { Link } from "react-router";

function Profile() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl">Profile</h1>
      <IconJarLogoIcon />
      <Link className="hover:underline text-blue-500" to="/">
        Home
      </Link>
    </div>
  );
}

export default Profile;
