import React from "react";
import "./index.css";
import Main from "./main";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

reportWebVitals();
