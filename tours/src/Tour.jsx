import { useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

const Tour = ({ tour, removeTour, descHeights, descHeight, setDescHeight }) => {
  const { id, image, info, name, price } = tour;
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => setShowFullText(!showFullText);

  return (
    <article className="single-tour">
      <div className="img-container">
        <img src={image} alt={name} />
        <span>{formatter.format(price.replace(",", ""))}</span>
      </div>
      <div className="info">
        <h5>{name}</h5>
        <p className={showFullText ? "" : "limit"}>{info}</p>
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
