import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "./style.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer
       position="bottom-center"
       autoClose={2000}
       hideProgressBar={true}
       closeButton={false}
       theme="colored"
       icon={false} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);