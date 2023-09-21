import React from "react";
import "regenerator-runtime";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <div className="dark:bg-gray-900 dark:text-gray-200">
        <App />
      </div>
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>
);
