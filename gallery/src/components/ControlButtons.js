import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentImageIndex } from "../features/gallery/gallerySlice";
import galleryImages from "../data";

const ControlButtons = () => {
  const dispatch = useDispatch();
  const { currentImageIndex } = useSelector((state) => state.gallery);

  const handleClick = (type) => {
    let newCurrentImageIndex = currentImageIndex;
    if (type === "increase") {
      newCurrentImageIndex += 1;
    } else {
      newCurrentImageIndex -= 1;
    }
    if (newCurrentImageIndex > galleryImages.length - 1) {
      newCurrentImageIndex = 0;
    }
    if (newCurrentImageIndex < 0) {
      newCurrentImageIndex = galleryImages.length - 1;
    }
    dispatch(setCurrentImageIndex(newCurrentImageIndex));
  };

  return (
    <>
      <button className="prev-btn" onClick={() => handleClick("decrease")}>
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={() => handleClick("increase")}>
        <FaChevronRight />
      </button>
    </>
  );
};
export default ControlButtons;
