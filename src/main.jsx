import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./global";
import { ScheduleProvider } from "./Provider/ScheduleContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <ScheduleProvider>
      <App />
    </ScheduleProvider>
  </React.StrictMode>
);
