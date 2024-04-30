import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Question = ({ question: item }) => {
  const { question, answer } = item;
  const [showAnswer, setShowAnswer] = useState(false);
  const [answerElHeight, setAnswerElHeight] = useState(0);
  const accordionContentRef = useRef(null);

  const handleToggle = () => {
    const answerElHeightNew = accordionContentRef.current.scrollHeight + 32;
    if (showAnswer) {
      setShowAnswer(false);
      setAnswerElHeight(0);
    } else {
      setShowAnswer(true);
      setAnswerElHeight(answerElHeightNew);
    }
  };

  return (
    <div className={showAnswer ? "accordion-item active" : "accordion-item"}>
      <button onClick={handleToggle} className="accordion-btn">
        <p>{question}</p>
        <span className="icon">
          <FaChevronDown />
        </span>
      </button>
      <div
        className="accordion-content"
        ref={accordionContentRef}
        style={{ height: showAnswer ? answerElHeight : 0 }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};
export default Question;
