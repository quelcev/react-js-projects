import { useState } from "react";

const App = () => {
  const [totalChars, setTotalChars] = useState(0);
  const [maxChars, setMaxChars] = useState(300);
  const [remainingChars, setRemainingChars] = useState(maxChars);

  const handleChange = (e) => {
    const valueLength = e.target.value.length;
    setTotalChars(valueLength);
    const newRemainingChars = maxChars - valueLength;
    setRemainingChars(newRemainingChars);
  };

  return (
    <div className="char-counter-container">
      <div className="char-counter-center">
        <h2>Real-time Character Counter</h2>
        <textarea
          className="textarea"
          placeholder="Please write your text here..."
          maxLength={maxChars}
          onChange={handleChange}
          onFocus={(e) => e.target.setAttribute("maxLength", maxChars)}
        ></textarea>
        <div className="total__remaining-container">
          <h3>
            Total Characters:{" "}
            <span className="total-characters">{totalChars}</span>
          </h3>
          <h3>
            Remaining:{" "}
            <span className="remaining-characters">{remainingChars}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default App;
