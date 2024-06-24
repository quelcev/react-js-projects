import { useEffect, useState } from "react";

const careers = ["Youtuber", "Web Developer", "Freelancer", "Instructor"];

const App = () => {
  const [careerIndex, setCareerIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCharacterIndex((prevIndex) => prevIndex + 1);
      if (characterIndex === careers[careerIndex]?.length + 1) {
        setCareerIndex((prevIndex) => prevIndex + 1);
        setCharacterIndex(0);
      }
      if (careerIndex === careers.length) {
        setCareerIndex(0);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [characterIndex, careerIndex]);

  return (
    <div className="container">
      <h1>
        I am {careers[careerIndex]?.charAt(0) === "I" ? "an" : "a"}{" "}
        {careers[careerIndex]?.slice(0, characterIndex)}
      </h1>
    </div>
  );
};
export default App;
