import { useSelector, useDispatch } from "react-redux";
import { handleScroll } from "../features/scroll/scrollSlice";

const BackTopBtn = () => {
  const scroll = useSelector((state) => state.scroll);
  const dispatch = useDispatch();
  const { showBackToTopBtn } = scroll;

  return (
    <a
      href="#home"
      className={`back-to-top-btn scroll-link ${
        showBackToTopBtn ? "show" : ""
      }`}
      onClick={(event) => dispatch(handleScroll({ event }))}
    >
      <i className="fas fa-arrow-up"></i>
    </a>
  );
};
export default BackTopBtn;
