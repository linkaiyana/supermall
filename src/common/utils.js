export function debounce(func, delay) {
  let timmer = null;
  return function (...args) {
    if (timmer) clearTimeout(timmer);
    timmer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}
