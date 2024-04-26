import Title from "./Title";
import Review from "./Review";
import data from "./data.json";
import { useState } from "react";

const App = () => {
  const [reviews, setReviews] = useState(data);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  const updateCurrentReview = (type) => {
    let newReviewIndex = null;
    if (type === "next") {
      newReviewIndex = currentReviewIndex + 1;
    } else if (type === "prev") {
      newReviewIndex = currentReviewIndex - 1;
    } else if ((type = "random")) {
      let randomNumber = Math.floor(Math.random() * reviews.length);
      if (prevIndex === randomNumber) {
        randomNumber += 1;
      }
      newReviewIndex = randomNumber;
    }
    setCurrentReviewIndex(validateNewIndex(newReviewIndex));
    setPrevIndex(validateNewIndex(newReviewIndex));
  };

  const validateNewIndex = (newIndex) => {
    if (newIndex > reviews.length - 1) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = reviews.length - 1;
    }
    return newIndex;
  };

  return (
    <section className="reviews-section">
      <Title />
      <div className="reviews-container">
        <Review
          currentReviewIndex={currentReviewIndex}
          reviews={reviews}
          updateCurrentReview={updateCurrentReview}
        />
      </div>
    </section>
  );
};
export default App;
