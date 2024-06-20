import { useState, useEffect } from "react";

const App = () => {
  const [jokeText, setJokeText] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "text/plain",
        },
      });
      const data = await response.text();
      setJokeText(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <section className="dad-jokes-container">
      <div className="dad-jokes-center">
        <button className="generate-btn" onClick={fetchJoke}>
          Random Dad Joke
        </button>
        <p className="result">{jokeText}</p>
      </div>
    </section>
  );
};
export default App;
