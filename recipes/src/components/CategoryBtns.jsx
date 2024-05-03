import { useRef, useState } from "react";
import CategoryBtn from "./CategoryBtn";

const CategoryBtns = ({ recipes, toggleRecipes, currentCategory }) => {
  const categories = [
    "all",
    ...new Set([].concat(...recipes.map((recipe) => recipe.mealType))),
  ];
  const categoryBtnContainerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - categoryBtnContainerRef.current.offsetLeft);
    setScrollLeft(categoryBtnContainerRef.current.scrollLeft);
  };
  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - categoryBtnContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust scroll speed
    categoryBtnContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="category-btn-container"
      onMouseDown={handleMouseDown}
      onMouseLeave={() => {
        setIsMouseDown(false);
      }}
      onMouseUp={() => {
        setIsMouseDown(false);
      }}
      onMouseMove={handleMouseMove}
      ref={categoryBtnContainerRef}
    >
      {categories.map((category) => {
        return (
          <CategoryBtn
            key={category}
            category={category}
            toggleRecipes={toggleRecipes}
            currentCategory={currentCategory}
          />
        );
      })}
    </div>
  );
};
export default CategoryBtns;
