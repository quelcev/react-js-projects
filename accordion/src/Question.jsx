import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Question = ({ question: item }) => {
  const { question, answer } = item;
  const [showAnswer, setShowAnswer] = useState(false);
  const [answerElHeight, setAnswerElHeight] = useState(0);
  const accordionContentRef = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 15);
  const accordionItem = useRef(null);
  const executeScroll = () => scrollToRef(accordionItem);

  const handleToggle = () => {
    const answerElHeightNew = accordionContentRef.current.scrollHeight + 32;
    if (showAnswer) {
      setShowAnswer(false);
      setAnswerElHeight(0);
    } else {
      setShowAnswer(true);
      setAnswerElHeight(answerElHeightNew);
    }
    setTimeout(() => {
      executeScroll();
    }, 400);
  };

  return (
    <div
      className={showAnswer ? "accordion-item active" : "accordion-item"}
      ref={accordionItem}
    >
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
