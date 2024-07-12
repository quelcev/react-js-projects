import { useRef, useEffect, useState } from "react";

const App = () => {
  const [deg, setDeg] = useState(315);
  const [runInterval, setRunInterval] = useState(true);
  let intervalRef = useRef(null);
  let timeoutRef = useRef(null);

  useEffect(() => {
    if (runInterval) {
      intervalRef.current = setInterval(() => {
        nextImage();
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [deg, runInterval]);

  const handleNext = () => {
    setRunInterval(false);
    nextImage();

    restartAutoPlay();
  };

  const handlePrev = () => {
    setRunInterval(false);
    const newDeg = deg + 45;
    setDeg(newDeg);

    restartAutoPlay();
  };

  const restartAutoPlay = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setRunInterval(true);
    }, 3000);
  };

  const nextImage = () => {
    const newDeg = deg - 45;
    setDeg(newDeg);
  };

  return (
    <>
      <div
        className="image-container"
        style={{ transform: `perspective(1000px) rotateY(${deg}deg)` }}
      >
        <span style={{ "--i": 1 }}>
          <h3 style={{ color: "white" }}>1</h3>
          <img src="https://picsum.photos/id/237/300/200" alt="" />
        </span>
        <span style={{ "--i": 2 }}>
          <h3 style={{ color: "white" }}>2</h3>
          <img src="https://picsum.photos/id/238/300/200" alt="" />
        </span>
        <span style={{ "--i": 3 }}>
          <h3 style={{ color: "white" }}>3</h3>
          <img src="https://picsum.photos/id/239/300/200" alt="" />
        </span>
        <span style={{ "--i": 4 }}>
          <h3 style={{ color: "white" }}>4</h3>
          <img src="https://picsum.photos/id/240/300/200" alt="" />
        </span>
        <span style={{ "--i": 5 }}>
          <h3 style={{ color: "white" }}>5</h3>
          <img src="https://picsum.photos/id/241/300/200" alt="" />
        </span>
        <span style={{ "--i": 6 }}>
          <h3 style={{ color: "white" }}>6</h3>
          <img src="https://picsum.photos/id/242/300/200" alt="" />
        </span>
        <span style={{ "--i": 7 }}>
          <h3 style={{ color: "white" }}>7</h3>
          <img src="https://picsum.photos/id/243/300/200" alt="" />
        </span>
        <span style={{ "--i": 8 }}>
          <h3 style={{ color: "white" }}>8</h3>
          <img src="https://picsum.photos/id/244/300/200" alt="" />
        </span>
      </div>
      <div className="btn-container">
        <button className="btn" id="prev" onClick={handlePrev}>
          Prev
        </button>
        <button className="btn" id="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
};
export default App;
