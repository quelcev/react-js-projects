import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark-mode")) ?? false
  );

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setDarkMode(isChecked);
    localStorage.setItem("dark-mode", JSON.parse(isChecked));
  };

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
    }

    return () => {
      document.body.style.backgroundColor = "transparent";
    };
  }, [darkMode]);

  return (
    <div className="input-container">
      <input
        type="checkbox"
        id="dark-mode"
        className="input"
        onChange={handleChange}
        checked={darkMode}
      />
      <label htmlFor="dark-mode" className="label">
        <div className="circle"></div>
      </label>
    </div>
  );
};
export default App;
