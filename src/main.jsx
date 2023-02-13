import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>
);
