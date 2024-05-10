import { useContext } from "react";
import { FaArrowUp } from "react-icons/fa6";
import AppContext from "../context";

const BackTopBtn = () => {
  const { showBackTopBtn, scrollToEl } = useContext(AppContext);

  return (
    <a
      href="#home"
      className={
        showBackTopBtn
          ? "back-to-top-btn scroll-link show"
          : "back-to-top-btn scroll-link"
      }
      onClick={scrollToEl}
    >
      <FaArrowUp />
    </a>
  );
};
export default BackTopBtn;
