export const recipesApi = "https://dummyjson.com/recipes";
export const throttle = (callback, delay) => {
  let lastCall = 0;
  return function () {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    callback.apply(this, arguments);
  };
};
