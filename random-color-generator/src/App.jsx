import { useEffect, useState } from "react";

const App = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const newColors = [];
    for (let i = 0; i < 30; i++) {
      const color = generateColor();
      newColors.push(color);
    }
    setColors(newColors);
  }, []);

  const generateColor = () => {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let color = "#";
    for (let i = 0; i < colorCodeLength; i++) {
      const randomNumber = Math.floor(Math.random() * chars.length);
      color += chars.charAt(randomNumber);
    }
    return color;
  };

  const isLight = (hexColor) => {
    // Convert hex to RGB
    let r = parseInt(hexColor.substring(1, 3), 16);
    let g = parseInt(hexColor.substring(3, 5), 16);
    let b = parseInt(hexColor.substring(5, 7), 16);

    // Calculate luminance
    let luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    // Check if luminance is greater than a threshold (e.g., 128)
    return luminance > 128;
  };

  return (
    <div className="colors-container">
      <div className="colors-container-center">
        {colors.map((color) => {
          return (
            <div
              key={color}
              className="color"
              style={{
                backgroundColor: color,
                color: isLight(color) ? "#111" : "#fff",
              }}
            >
              {color}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
