import { useState } from "react";

const hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const App = () => {
  const [color, setColor] = useState("#f1f5f8");
  const [copyElInnerHTML, setCopyElInnerHTML] = useState("Copy");

  const changeColor = () => {
    let colorNew = "#";
    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * hexChars.length);
      colorNew += hexChars[randomNumber];
    }
    setColor(colorNew);
    setCopyElInnerHTML("Copy");
    document.body.style.backgroundColor = color;
  };

  const copyColor = () => {
    copyToClipboard(color);
    setCopyElInnerHTML('Copied <i class="fas fa-check"></i>');
    setTimeout(() => {
      setCopyElInnerHTML("Copy");
    }, 3000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // console.log("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Unable to copy to clipboard:", err);
      });
  };

  return (
    <div className="color-generator-container">
      <h2>
        Color:{" "}
        <span className="color">
          {color}
          <span
            className="copy"
            onClick={copyColor}
            dangerouslySetInnerHTML={{ __html: copyElInnerHTML }}
          />
        </span>
      </h2>
      <button className="generate-btn" onClick={changeColor}>
        Generate
      </button>
    </div>
  );
};
export default App;
