const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

const Tour = ({
  tour,
  removeTour,
  descTextMinHeight,
  titleMinHeight,
  toggleText,
  showFullText,
}) => {
  const { id, image, info, name, price } = tour;

  return (
    <article className="single-tour">
      <div className="img-container">
        <img src={image} alt={name} />
        <span>{formatter.format(price.replace(",", ""))}</span>
      </div>
      <div className="info">
        <h5 style={{ minHeight: `${titleMinHeight}px` }}>{name}</h5>
        <p
          style={{
            minHeight: showFullText.includes(id) ? `${descTextMinHeight}px` : 0,
          }}
          className={showFullText.includes(id) ? "" : "limit"}
        >
          {info}
        </p>
        {showFullText.includes(id) ? (
          <button className="show-less-btn" onClick={() => toggleText(id)}>
            Show Less
          </button>
        ) : (
          <button className="read-more-btn" onClick={() => toggleText(id)}>
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
