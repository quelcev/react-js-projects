import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    setTime();
  }, []);

  const setTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? "0" + minutes : minutes;
    const secondsStr = seconds < 10 ? "0" + seconds : seconds;
    const hoursStr = hours < 10 ? "0" + hours : hours;

    const newCurrentTime = { hoursStr, minutesStr, secondsStr, ampm };
    setCurrentTime(newCurrentTime);

    setTimeout(setTime, 1000);
  };

  if (currentTime !== null) {
    const { hoursStr, minutesStr, secondsStr, ampm } = currentTime;

    return (
      <div className="digital-clock-container">
        <div className="digital-clock-center">
          <h2>Digital Clock</h2>
          <div className="time-container">
            <div className="time-item hours">
              <span>{hoursStr}</span>
              <p>Hours</p>
            </div>
            <div className="time-item minutes">
              <span>{minutesStr}</span>
              <p>Minutes</p>
            </div>
            <div className="time-item seconds">
              <span>{secondsStr}</span>
              <p>Seconds</p>
            </div>
            <div className="time-item am__pm">
              <span>{ampm}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default App;
