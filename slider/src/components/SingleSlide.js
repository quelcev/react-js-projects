import { useSelector } from "react-redux";

const SingleSlide = ({ content, index }) => {
  const { currIndex } = useSelector((state) => state.slider);

  const slideStyle = {
    left: `${index * 100}%`,
    transform: `translateX(-${currIndex * 100}%)`,
  };

  return (
    <div
      className={`single-slide ${currIndex === index ? "active" : ""}`}
      style={slideStyle}
    >
      <h2>{content}</h2>
    </div>
  );
};
export default SingleSlide;
