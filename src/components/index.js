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

      <section className="by">
        Made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        <a
          href="https://github.com/jeantivan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jean Tivan
        </a>
      </section>
    </>
  );
}

export default App;
