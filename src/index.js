import React from "react";
import ReactDOM from "react-dom";
import App from "./components";
import "./index.scss";

// Context
import { PomodoroProvider } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PomodoroProvider>
      <App />
    </PomodoroProvider>
  </React.StrictMode>
);
