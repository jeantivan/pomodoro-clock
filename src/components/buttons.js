import React, { useContext, useEffect, useRef } from "react";
import { PomodoroContext, initialState } from "../Context";
import accurateInterval from "../accurateInterval";
import BeepSound from "../audio/BeepSound.wav";

function Buttons(props) {
  const { state, dispatch } = useContext(PomodoroContext);
  const beep = useRef();
  const handleReset = () => {
    if (state.intervalID !== null) state.intervalID.cancel();
    beep.current.pause();
    beep.current.currentTime = 0;
    dispatch({ type: "RESET", payload: initialState });
  };

  const handlePlay = () => {
    dispatch({ type: "SWITCH_TIMER_RUNNING" });

    if (state.intervalID !== null) {
      state.intervalID.cancel();
      return dispatch({ type: "SET_INTERVAL_ID", payload: null });
    }

    countDown();
  };

  const countDown = () => {
    let interval = accurateInterval(1000, () => {
      dispatch({ type: "DECREMENT_SEC_LEFT" });
    });

    dispatch({ type: "SET_INTERVAL_ID", payload: interval });
  };

  const switchTimer = () => {
    beep.current.play();
    state.intervalID.cancel();
    dispatch({ type: "SWITCH_TIMER" });
    countDown();
  };

  useEffect(() => {
    if (state.minLeft === 0 && state.secLeft === 0) return switchTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <audio id="beep" src={BeepSound} preload="auto" ref={beep}></audio>
    </section>
  );
}

export default Buttons;
