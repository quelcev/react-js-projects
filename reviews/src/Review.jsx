import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = ({ reviews, currentReviewIndex, updateCurrentReview }) => {
  const { img, job, name, text } = reviews[currentReviewIndex];

  return (
    <div className="review">
      <div className="img-container">
        <img src={img} alt={name} className="img" />
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btns-container">
        <div>
          <button
            className="prev-btn"
            onClick={() => updateCurrentReview("prev")}
          >
            <FaChevronLeft />
          </button>
          <button
            className="next-btn"
            onClick={() => updateCurrentReview("next")}
          >
            <FaChevronRight />
          </button>
        </div>
        <button
          className="random-btn"
          onClick={() => updateCurrentReview("random")}
        >
          Random
        </button>
      </div>
    </div>
  );
};
export default Review;
