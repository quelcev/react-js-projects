import { useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const Question2 = ({
  question: item,
  handleToggle,
  activeId,
  answerElHeight,
}) => {
  const { question, answer, id } = item;
  const accordionContentRef = useRef(null);
  const isActive = activeId === id;

  const getAccordionHeight = () =>
    accordionContentRef.current.scrollHeight + 32;

  return (
    <div className={isActive ? "accordion-item active" : "accordion-item"}>
      <button
        onClick={() => handleToggle({ id, height: getAccordionHeight() })}
        className="accordion-btn"
      >
        <p>{question}</p>
        <span className="icon">
          <FaChevronDown />
        </span>
      </button>
      <div
        className="accordion-content"
        ref={accordionContentRef}
        style={{ height: isActive ? answerElHeight : 0 }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};
export default Question2;
