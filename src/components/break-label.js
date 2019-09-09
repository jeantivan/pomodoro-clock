import React, { useContext } from "react";
import { PomodoroContext } from "../Context";

function BreakLabel() {
  const { state, dispatch } = useContext(PomodoroContext);
  const handleIncrement = () => {
    if (state.breakLength === 60) return;
    if (state.timerRunning === false && state.sessionType === "Break")
      dispatch({ type: "INCREMENT_MIN_LEFT" });
    dispatch({ type: "INCREMENT_BREAK_LENGTH" });
  };
  const handleDecrement = () => {
    if (state.breakLength === 1) return;
    if (state.timerRunning === false && state.sessionType === "Break")
      dispatch({ type: "INCREMENT_MIN_LEFT" });
    dispatch({ type: "DECREMENT_BREAK_LENGTH" });
  };

  return (
    <section className="break-label">
      <h4 id="break-label" className="label-title">
        Break Length
      </h4>
      <div className="label-body">
        <h3 id="break-length">{state.breakLength}</h3>
      </div>
      <div className="label-bottom">
        <button
          id="break-increment"
          className="btn btn-icm"
          onClick={handleIncrement}
        >
          <i className="material-icons">arrow_upward</i>
        </button>
        <button
          id="break-decrement"
          className="btn btn-dcm"
          onClick={handleDecrement}
        >
          <i className="material-icons">arrow_downward</i>
        </button>
      </div>
    </section>
  );
}

export default BreakLabel;
