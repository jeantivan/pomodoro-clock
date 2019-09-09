import React from "react";
import ReactDOM from "react-dom";
import App from "./components";
import "./index.scss";

// Context
import { PomodoroProvider } from "./Context";

ReactDOM.render(
  <PomodoroProvider>
    <App />
  </PomodoroProvider>,
  document.getElementById("App")
);
