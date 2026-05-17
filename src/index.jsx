import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/styles.css";

const redirectPath = new URLSearchParams(window.location.search).get("redirect");

if (redirectPath) {
  window.history.replaceState(null, "", redirectPath);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
