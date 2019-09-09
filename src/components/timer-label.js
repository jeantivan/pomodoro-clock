import React, { useContext } from "react";
import { PomodoroContext } from "../Context";

function TimerLabel() {
  const { state } = useContext(PomodoroContext);

  return (
    <section
      className={`timer-label flex-center ${
        state.secLeft <= 10 && state.minLeft === 0 ? "alert" : ""
      }`}
    >
      <h3 id="timer-label">{state.sessionType} time left</h3>
      <h2 id="time-left">
        {state.minLeft < 10 ? "0" + state.minLeft : state.minLeft}:
        {state.secLeft < 10 ? "0" + state.secLeft : state.secLeft}
      </h2>
    </section>
  );
}

export default TimerLabel;
