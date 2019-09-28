import React, { useReducer } from "react";

const initialState = {
  intervalID: null,
  sessionLength: 25,
  breakLength: 5,
  sessionType: "Session",
  timerRunning: false,
  minLeft: 25,
  secLeft: 0
};

function init(initialState) {
  return initialState;
}

const rootReducer = (state, action) => {
  switch (action.type) {
    case "SET_INTERVAL_ID":
      return { ...state, intervalID: action.payload };
    case "INCREMENT_SESSION_LENGTH":
      return { ...state, sessionLength: state.sessionLength + 1 };
    case "DECREMENT_SESSION_LENGTH":
      return { ...state, sessionLength: state.sessionLength - 1 };
    case "INCREMENT_BREAK_LENGTH":
      return { ...state, breakLength: state.breakLength + 1 };
    case "DECREMENT_BREAK_LENGTH":
      return { ...state, breakLength: state.breakLength - 1 };
    case "DECREMENT_SEC_LEFT":
      if (state.secLeft > 0) return { ...state, secLeft: state.secLeft - 1 };

      return { ...state, minLeft: state.minLeft - 1, secLeft: 59 };
    case "INCREMENT_MIN_LEFT":
      return { ...state, minLeft: state.minLeft + 1 };
    case "DECREMENT_MIN_LEFT":
      return { ...state, minLeft: state.minLeft ? state.minLeft - 1 : 0 };
    case "SWITCH_TIMER":
      if (state.sessionType === "Session")
        return {
          ...state,
          sessionType: "Break",
          minLeft: state.breakLength,
          secLeft: 0,
          intervalID: null
        };
      return {
        ...state,
        sessionType: "Session",
        minLeft: state.sessionLength,
        secLeft: 0,
        intervalID: null
      };
    case "SWITCH_TIMER_RUNNING":
      return { ...state, timerRunning: !state.timerRunning };
    case "RESET":
      return init(action.payload);
    default:
      return state;
  }
};

const PomodoroContext = React.createContext(initialState);

function PomodoroProvider(props) {
  const [state, dispatch] = useReducer(rootReducer, initialState, init);
  return (
    <PomodoroContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PomodoroContext.Provider>
  );
}

export { PomodoroContext, PomodoroProvider, initialState };
