import React from "react";
import { createBrowserRouter } from "react-router";

import Home from "./react-router/Home";
import Profile from "./react-router/Profile";
import ErrorPage from "./react-router/ErrorPage";
import ProfileDetail from "./react-router/ProfileDetail";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/profile",
    element: <Profile />,
  },{
    path: '/profile/:id',
    element: <ProfileDetail />
  }
]);

export default router;
