export const scrollToRef = ({
  ref,
  navRef,
  stickyNav,
  linksHeight,
  backTop,
}) => {
  let offsetPos = ref.current.offsetTop - (navRef.current.offsetHeight - 0.5);
  if (window.matchMedia("(max-width: 639px)").matches && !backTop) {
    offsetPos = ref.current.offsetTop - (navRef.current.offsetHeight - 10);
    if (stickyNav) {
      offsetPos =
        ref.current.offsetTop -
        navRef.current.offsetHeight +
        parseFloat(linksHeight.replace("px", ""));
    }
  }
  setTimeout(() => {
    window.scrollTo({
      top: offsetPos,
      behavior: "smooth",
    });
  }, 100);
};
export const throttle = (func, wait_ms) => {
  // fires func but only if wait_ms has elapsed, otherwise does nothing.
  var time = Date.now();
  return function () {
    if (time + wait_ms - Date.now() < 0) {
      func();
      time = Date.now();
    }
  };
};
