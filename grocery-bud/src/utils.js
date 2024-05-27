export const addToLocalStorage = (name, items) => {
  localStorage.setItem(name, JSON.stringify(items));
};
export const removeToLocalStorage = (name) => {
  localStorage.removeItem(name);
};
export const getFromLocalStorage = (name) => {
  return JSON.parse(localStorage.getItem(name));
};
