import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./views/App";
import { BrowserRouter } from "react-router-dom";

// some fix with mobile window height
// TODO:
if (window.innerWidth <= 720) {
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* TODO */}
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
