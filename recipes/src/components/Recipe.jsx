import { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { throttle } from "../utils";
import { Link } from "react-router-dom";

const Recipe = ({ recipe, currentCategory }) => {
  const { id, name, image, rating, ingredients } = recipe;
  const menuItemRef = useRef(null);

  useEffect(() => {
    const menuItemTransition = () => {
      if (window.scrollY > menuItemRef?.current?.offsetTop - 600) {
        menuItemRef?.current?.classList.add("transition");
      } else {
        menuItemRef?.current?.classList.remove("transition");
      }
    };

    window.addEventListener("scroll", throttle(menuItemTransition, 100));
    menuItemTransition();
    return () =>
      window.removeEventListener("scroll", throttle(menuItemTransition, 100));
  }, [currentCategory]);

  return (
    <article className="menu-item" ref={menuItemRef}>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <div className="name__rating">
          <p className="name">
            <strong>{name}</strong>
          </p>
          <p className="rating">
            <strong>{rating}</strong>
            <FaStar />
          </p>
        </div>
        <div className="ingredients__read-more">
          <ul className="ingredients">
            {ingredients.map((ingredient, index) => {
              if (index > 2) return;
              return <li key={ingredient}>{ingredient}</li>;
            })}
            <span>...</span>
          </ul>

          <Link to={`/recipes/${id}`} className="read-more">
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};
export default Recipe;
