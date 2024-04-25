export const throttle = (func, delay) => {
  let timeoutId;
  let lastExecTime = 0;

  return function (...args) {
    const currentTime = Date.now();
    const timeSinceLastExec = currentTime - lastExecTime;

    if (!lastExecTime || timeSinceLastExec >= delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = currentTime;
      }, delay - timeSinceLastExec);
    }
  };
};
export const getBiggestHeight = (el) => {
  return Math.max(...[...el].map((el) => el.offsetHeight));
};
