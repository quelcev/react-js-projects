import { useEffect, useRef, useState } from "react";
import Questions from "./Questions";
import Questions2 from "./Questions2";

const App = () => {
  const accordionContainerRef = useRef(null);
  const [showOne, setShowOne] = useState(false);

  useEffect(() => {
    setShowOne(accordionContainerRef.current.dataset.showOne === "true");
  }, []);

  return (
    <section id="accordion" data-show-one="false" ref={accordionContainerRef}>
      <h2>Frequently Asked Questions</h2>
      {showOne ? <Questions2 /> : <Questions />}
    </section>
  );
};
export default App;
