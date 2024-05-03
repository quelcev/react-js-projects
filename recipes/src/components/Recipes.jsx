import Recipe from "./Recipe";

const Recipes = ({ recipes, currentCategory }) => {
  let newRecipes = [];

  if (currentCategory && currentCategory !== "all") {
    newRecipes = recipes.filter((recipe) =>
      recipe.mealType.includes(currentCategory)
    );
  } else if (currentCategory === "all") {
    newRecipes = recipes;
  }

  return (
    <div className="menu-container">
      {newRecipes.map((recipe) => {
        return (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            currentCategory={currentCategory}
          />
        );
      })}
    </div>
  );
};
export default Recipes;
