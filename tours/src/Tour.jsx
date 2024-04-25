import { useEffect, useState } from "react";
import { getBiggestHeight, throttle } from "./utils";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

const Tour = ({ tour, removeTour }) => {
  const { id, image, info, name, price } = tour;
  const [showFullText, setShowFullText] = useState(false);
  const [descTextMinHeight, setDescTextMinHeight] = useState(0);
  const [titleMinHeight, setTitleMinHeight] = useState(0);

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

  const toggleText = () => setShowFullText(!showFullText);

  return (
    <article className="single-tour">
      <div className="img-container">
        <img src={image} alt={name} />
        <span>{formatter.format(price.replace(",", ""))}</span>
      </div>
      <div className="info">
        <h5 style={{ minHeight: `${titleMinHeight}px` }}>{name}</h5>
        <p
          style={{ minHeight: showFullText ? `${descTextMinHeight}px` : 0 }}
          className={showFullText ? "" : "limit"}
        >
          {info}
        </p>
        {showFullText ? (
          <button className="show-less-btn" onClick={toggleText}>
            Show Less
          </button>
        ) : (
          <button className="read-more-btn" onClick={toggleText}>
            Read More
          </button>
        )}
        <button className="not-interested-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
