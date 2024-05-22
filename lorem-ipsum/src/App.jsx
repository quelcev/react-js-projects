import { useRef, useState } from "react";
import text from "./data";

const App = () => {
  const [paraInputVal, setParaInputVal] = useState(0);
  const [generatedText, setGeneratedText] = useState([]);
  const [disableBtn, setDisableBtn] = useState(true);
  const textContainerRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      setDisableBtn(false);
      setParaInputVal(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseInt(paraInputVal);
    if (value) {
      setGeneratedText(text.slice(0, value));
      setTimeout(() => {
        textContainerRef.current.scrollIntoView();
      }, 300);
    }
  };

  return (
    <section className="lorem-ipsum">
      <div className="section-center">
        <h1>Tired Of Boring Lorem Ipsum?</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="paragraphs">Paragraphs:</label>
          <input
            type="number"
            id="paragraphs"
            name="paragraphs"
            min="1"
            max={text.length}
            placeholder={Math.floor(text.length / 2)}
            onChange={handleChange}
          />
          <button type="submit" disabled={disableBtn}>
            Generate
          </button>
        </form>
        <div className="text-container" ref={textContainerRef}>
          {generatedText.map((text, i) => {
            return (
              <p key={i}>
                {i + 1}. {text}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default App;
