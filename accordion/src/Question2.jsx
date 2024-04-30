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
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 15);
  const accordionItem = useRef(null);
  const executeScroll = () => scrollToRef(accordionItem);

  const getAccordionHeight = () =>
    accordionContentRef.current.scrollHeight + 32;

  const handleClick = () => {
    handleToggle({ id, height: getAccordionHeight() });
    setTimeout(() => {
      executeScroll();
    }, 400);
  };

  return (
    <div
      className={isActive ? "accordion-item active" : "accordion-item"}
      ref={accordionItem}
    >
      <button onClick={handleClick} className="accordion-btn">
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
