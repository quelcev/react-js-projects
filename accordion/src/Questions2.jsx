import Question from "./Question";
import questions from "./data";
import Question2 from "./Question2";
import { useState } from "react";

const Questions2 = () => {
  const [activeId, setActiveId] = useState("");
  const [answerElHeight, setAnswerElHeight] = useState(0);

  const handleToggle = ({ id, height }) => {
    if (id === activeId) {
      setActiveId("");
      setAnswerElHeight(0);
    } else {
      setActiveId(id);
      setAnswerElHeight(height);
    }
  };

  return (
    <div className="accordion-container">
      {questions.map((question) => {
        // return <Question key={question.id} question={question} />;
        return (
          <Question2
            key={question.id}
            question={question}
            handleToggle={handleToggle}
            activeId={activeId}
            answerElHeight={answerElHeight}
          />
        );
      })}
    </div>
  );
};
export default Questions2;
