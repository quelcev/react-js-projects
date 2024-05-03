import { useRef } from "react";

const CategoryBtn = ({ category, toggleRecipes, currentCategory }) => {
  return (
    <button
      className={
        category === currentCategory ? "category-btn active" : "category-btn"
      }
      onClick={() => toggleRecipes(category)}
    >
      {category}
    </button>
  );
};
export default CategoryBtn;
