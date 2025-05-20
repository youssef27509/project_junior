import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import ReactDOM from "react-dom/client"; // Corrected import
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

