import React from "react";

// Components
import Title from "./title";
import BreakLabel from "./break-label";
import SessionLabel from "./session-label";
import TimerLabel from "./timer-label";
import Buttons from "./buttons";

function App() {
  return (
    <>
      <Title />

      <Buttons />

      <TimerLabel />

      <SessionLabel />

      <BreakLabel />
    </>
  );
}

export default App;
