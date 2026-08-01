import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./styles/styles.css";

const redirectPath = new URLSearchParams(window.location.search).get("redirect");

if (redirectPath) {
  window.history.replaceState(null, "", redirectPath);
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
