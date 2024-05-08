import { FaArrowUp } from "react-icons/fa";

const BackToTopBtn = ({ showBackTopBtn, handleScrollTo }) => {
  return (
    <a
      href="#home"
      className={
        showBackTopBtn
          ? "back-to-top-btn scroll-link show"
          : "back-to-top-btn scroll-link"
      }
      onClick={(e) => handleScrollTo({ e, href: "#home", backTop: true })}
    >
      <FaArrowUp />
    </a>
  );
};
export default BackToTopBtn;
