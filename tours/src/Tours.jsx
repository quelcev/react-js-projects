import { useEffect, useState } from "react";
import Tour from "./Tour";
import { getBiggestHeight, throttle } from "./utils";

const Tours = ({ tours, removeTour }) => {
  const [descTextMinHeight, setDescTextMinHeight] = useState(0);
  const [titleMinHeight, setTitleMinHeight] = useState(0);
  const [showFullText, setShowFullText] = useState([]);

  const toggleText = (newId) => {
    let newShowFullText = [];
    if (showFullText.includes(newId)) {
      newShowFullText = [...showFullText].filter((id) => id !== newId);
    } else {
      newShowFullText = [...showFullText, newId];
    }
    setShowFullText(newShowFullText);
  };

  useEffect(() => {
    const descTextEls = document.querySelectorAll(".info > p");
    const titleEls = document.querySelectorAll(".info > h5");

    const equalHeight = () => {
      // reset height to get new biggest height
      setDescTextMinHeight(0);
      setTitleMinHeight(0);
      // set new biggest height
      setTimeout(() => {
        if (window.matchMedia("(max-width: 600px)").matches) {
          setDescTextMinHeight(0);
          setTitleMinHeight(0);
        } else {
          setDescTextMinHeight(getBiggestHeight(descTextEls));
          setTitleMinHeight(getBiggestHeight(titleEls));
        }
      }, 500);
    };
    equalHeight();
    const throttleEqualHeight = throttle(equalHeight, 500);
    window.addEventListener("resize", throttleEqualHeight);
    return () => {
      window.removeEventListener("resize", throttleEqualHeight);
    };
  }, [showFullText]);

  return (
    <div className="tours-container">
      {tours.map((tour) => {
        return (
          <Tour
            key={tour.id}
            tour={tour}
            removeTour={removeTour}
            descTextMinHeight={descTextMinHeight}
            titleMinHeight={titleMinHeight}
            toggleText={toggleText}
            showFullText={showFullText}
          />
        );
      })}
    </div>
  );
};
export default Tours;
