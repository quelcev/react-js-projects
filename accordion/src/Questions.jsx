import { useRef } from "react";
import Question from "./Question";
import questions from "./data";

const Questions = () => {
  const accordionContainerRef = useRef(null);

  return (
    <div
      className="accordion-container"
      data-show-one="false"
      ref={accordionContainerRef}
    >
      {questions.map((question) => {
        return <Question key={question.id} question={question} />;
      })}
    </div>
  );
};
export default Questions;
