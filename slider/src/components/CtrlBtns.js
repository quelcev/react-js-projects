import { useSelector, useDispatch } from "react-redux";
import { setCurrIndex } from "../features/slider/sliderSlice";
import slides from "../data";

const CtrlBtns = () => {
  const { currIndex } = useSelector((state) => state.slider);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const type = e.target.classList.contains("next-btn") ? "next" : "prev";
    dispatch(setCurrIndex({ type }));
  };

  return (
    <div className="ctrl-btn-container">
      {currIndex > 0 && (
        <button className="prev-btn" onClick={handleClick}>
          Prev
        </button>
      )}
      {currIndex < slides.length - 1 && (
        <button className="next-btn" onClick={handleClick}>
          Next
        </button>
      )}
    </div>
  );
};
export default CtrlBtns;
