import React, { useContext, useEffect } from "react";
import { PomodoroContext, initialState } from "../Context";
import accurateInterval from "../accurateInterval";

function Buttons(props) {
  const { state, dispatch } = useContext(PomodoroContext);

  const handleReset = () => {
    if (state.intervalID) {
      state.intervalID.cancel();
    }
    dispatch({ type: "RESET", payload: initialState });
  };

  const handlePlay = () => {
    dispatch({ type: "SWITCH_TIMER_RUNNING" });

    if (state.intervalID !== null) {
      state.intervalID.cancel();
      return dispatch({ type: "SET_INTERVAL_ID", payload: null });
    }

    let interval = accurateInterval(1000, countDown);
    dispatch({ type: "SET_INTERVAL_ID", payload: interval });
  };

  const countDown = () => {
    dispatch({ type: "DECREMENT_SEC_LEFT" });
  };

  const switchTimer = () => {
    dispatch({ type: "SWITCH_TIMER_RUNNING" });
    state.intervalID.cancel();
    dispatch({ type: "SET_INTERVAL_ID", payload: null });

    dispatch({
      type: "SWITCH_TIMER",
      payload:
        state.sessionType === "Session"
          ? {
              sessionType: "Break",
              minLeft: state.breakLength
            }
          : {
              sessionType: "Session",
              minLeft: state.sessionLength
            }
    });
    handlePlay();
  };

  useEffect(() => {
    console.log(state.minLeft);
    console.log(state.secLeft);
    if (state.minLeft === 0 && state.secLeft === 0) return switchTimer();
  }, [state.minLeft, state.secLeft]);

  return (
    <section className="buttons flex-center">
      <button id="start_stop" onClick={handlePlay} className="btn btn-start">
        {state.timerRunning ? (
          <i className="material-icons">pause_circle_outline</i>
        ) : (
          <i className="material-icons">play_circle_outline</i>
        )}
      </button>
      <button id="reset" onClick={handleReset} className="btn btn-reset">
        <i className="material-icons">restore</i>
      </button>
    </section>
  );
}

export default Buttons;
