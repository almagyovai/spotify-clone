import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import NotFound from "./Pages/NotFound.js"
import "./Assets/App.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HomePage />
      <NotFound />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
