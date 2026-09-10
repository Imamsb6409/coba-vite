import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppUseState from "./AppUseState";
import AppUseRef from "./AppUseRef";
import { Theme } from "@radix-ui/themes";
import { RouterProvider } from "react-router";
import router from "./router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      {/* <RouterProvider router={router} /> */}
      <AppUseState />
    </Theme>
  </StrictMode>,
);
