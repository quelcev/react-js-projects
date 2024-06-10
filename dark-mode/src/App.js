import { useEffect, useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) ?? false
  );

  const handleChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      setIsDarkMode(!isDarkMode);
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));

    return () => {
      document.body.classList.remove("dark-mode");
    };
  }, [isDarkMode]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <span>{isDarkMode ? "Dark" : "Light"} Mode</span>
          <label
            className="dark-mode-switch"
            tabIndex="0"
            onKeyUp={handleKeyUp}
          >
            <input
              type="checkbox"
              onChange={handleChange}
              checked={isDarkMode}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </nav>
    </main>
  );
};
export default App;
