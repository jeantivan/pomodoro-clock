import React, { useContext } from "react";
import { PomodoroContext } from "../Context";

function SessionLabel() {
  const { state, dispatch } = useContext(PomodoroContext);
  const handleIncrement = () => {
    if (state.sessionLength === 60) return;
    if (state.timerRunning === false && state.sessionType === "Session")
      dispatch({ type: "INCREMENT_MIN_LEFT" });
    dispatch({ type: "INCREMENT_SESSION_LENGTH" });
  };
  const handleDecrement = () => {
    if (state.sessionLength === 1) return;
    if (state.timerRunning === false && state.sessionType === "Session")
      dispatch({ type: "DECREMENT_MIN_LEFT" });
    dispatch({ type: "DECREMENT_SESSION_LENGTH" });
  };
  return (
    <section className="session-label">
      <h3 id="session-label" className="label-title">
        Session Length
      </h3>
      <div className="label-body">
        <h3 id="session-length">{state.sessionLength}</h3>
      </div>
      <div className="label-bottom">
        <button
          id="session-increment"
          className="btn btn-icm"
          onClick={handleIncrement}
        >
          <i className="material-icons">arrow_upward</i>
        </button>
        <button
          id="session-decrement"
          className="btn btn-dcm"
          onClick={handleDecrement}
        >
          <i className="material-icons">arrow_downward</i>
        </button>
      </div>
    </section>
  );
}

export default SessionLabel;
