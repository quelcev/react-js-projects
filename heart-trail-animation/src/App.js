import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.body.addEventListener("mousemove", animateHeart);

    return () => {
      document.body.removeEventListener("mousemove", animateHeart);
    };
  }, []);

  const animateHeart = (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    const spanEl = document.createElement("span");
    const size = Math.floor(Math.random() * 100) + 1;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    spanEl.style.top = y + "px";
    spanEl.style.left = x + "px";
    document.body.appendChild(spanEl);
    setTimeout(() => {
      spanEl.remove();
    }, 3000);
  };

  return <div></div>;
};
export default App;
