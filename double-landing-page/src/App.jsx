import { useState } from "react";

const App = () => {
  const [activeClass, setActiveClass] = useState("");

  const handleMouseOver = (e) => {
    if (e.target.closest(".left")) {
      setActiveClass("active-left");
    }
    if (e.target.closest(".right")) {
      setActiveClass("active-right");
    }
  };

  return (
    <div
      className={`container ${activeClass}`}
      onMouseOver={handleMouseOver}
      onMouseLeave={() => setActiveClass("")}
    >
      <div className="split left">
        <div className="dark-overlay"></div>
        <div className="copy">
          <h2>Apple</h2>
          <button className="btn">Buy Now</button>
        </div>
      </div>
      <div className="split right">
        <div className="dark-overlay"></div>
        <div className="copy">
          <h2>Samsung</h2>
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
export default App;
