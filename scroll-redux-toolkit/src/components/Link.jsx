import { useDispatch } from "react-redux";
import { handleScroll } from "../features/scroll/scrollSlice";

const Link = ({ link }) => {
  const { target, label } = link;
  const dispatch = useDispatch();

  return (
    <li>
      <a
        href={target}
        className="scroll-link"
        onClick={(event) => dispatch(handleScroll({ event }))}
      >
        {label}
      </a>
    </li>
  );
};
export default Link;
