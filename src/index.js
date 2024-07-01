import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// src/index.js 또는 src/App.js 파일에 추가
document.addEventListener("gesturestart", function (e) {
  e.preventDefault();
});

document.addEventListener("dblclick", function (e) {
  e.preventDefault();
});
