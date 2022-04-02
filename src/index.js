import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SetupWallet from "./SetupWallet";

if (window.ethereum && window.ethereum !== "undefined")
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
else
  ReactDOM.render(
    <React.StrictMode>
      <SetupWallet />
    </React.StrictMode>,
    document.getElementById("root")
  );
