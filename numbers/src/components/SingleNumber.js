import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNumbersData } from "../features/numbers/numbersSlice";

const SingleNumber = ({ idName, name, total }) => {
  const { numbersData } = useSelector((state) => state.numbers);
  const dispatch = useDispatch();

  useEffect(() => {
    const endNum = parseInt(total);
    const increment = Math.ceil(endNum / 500);
    let goalNum = 0;
    const intId = setInterval(() => {
      goalNum += increment;
      dispatch(setNumbersData({ idName, goalNum }));
      if (goalNum >= total) {
        clearInterval(intId);
      }
    }, 1);
  }, [dispatch, idName, total]);

  return (
    <article className="single-number">
      <span className="number">
        {numbersData[idName]}
        {numbersData[idName] >= total && "+"}
      </span>
      <p>{name}</p>
    </article>
  );
};
export default SingleNumber;
