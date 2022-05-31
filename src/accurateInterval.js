// Function By Squeegy. https://gist.github.com/Squeegy
//
// To prevent the timer from being delayed over time.
//
//source: https://gist.github.com/Squeegy/1d99b3cd81d610ac7351

export default function accurateInterval(time, fn) {
  var cancel, nextAt, timeout, wrapper, _ref;
  nextAt = new Date().getTime() + time;
  timeout = null;
  if (typeof time === "function") {
    _ref = [time, fn];
    fn = _ref[0];
    time = _ref[1];
  }
  wrapper = function () {
    nextAt += time;
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    return fn();
  };
  cancel = function () {
    return clearTimeout(timeout);
  };
  timeout = setTimeout(wrapper, nextAt - new Date().getTime());
  return {
    cancel: cancel,
  };
}
