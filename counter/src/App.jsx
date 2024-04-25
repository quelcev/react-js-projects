import { useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const counterTimeout = useRef(null);
  const counterInterval = useRef(null);

  const updateCount = (e) => {
    const isIncrease = e.currentTarget.classList.contains("increase");
    const isDecrease = e.currentTarget.classList.contains("decrease");
    const isReset = e.currentTarget.classList.contains("reset");
    if (isIncrease) {
      setCount((prevCount) => prevCount + 1);
    }
    if (isDecrease) {
      setCount((prevCount) => prevCount - 1);
    }
    if (isReset) {
      setCount((prevCount) => (prevCount = 0));
    }
  };

  const updateCountMouseHold = (operation) => {
    resetCounterTimer();

    counterTimeout.current = setTimeout(() => {
      counterInterval.current = setInterval(() => {
        if (operation === "increase") {
          setCount((prevCount) => prevCount + 1);
        } else {
          setCount((prevCount) => prevCount - 1);
        }
      }, 100);
    }, 500);
  };

  const resetCounterTimer = () => {
    clearTimeout(counterTimeout.current);
    clearInterval(counterInterval.current);
  };

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <span className="count">{count}</span>
      <div className="btns-container">
        <button
          className="decrease"
          onClick={updateCount}
          onMouseDown={() => updateCountMouseHold("decrease")}
          onMouseLeave={resetCounterTimer}
          onMouseUp={resetCounterTimer}
        >
          Decrease
        </button>
        <button className="reset" onClick={updateCount}>
          Reset
        </button>
        <button
          className="increase"
          onClick={updateCount}
          onMouseDown={() => updateCountMouseHold("increase")}
          onMouseLeave={resetCounterTimer}
          onMouseUp={resetCounterTimer}
        >
          Increase
        </button>
      </div>
    </div>
  );
};
export default App;
