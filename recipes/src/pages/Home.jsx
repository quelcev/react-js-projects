import { useEffect, useState } from "react";
import CategoryBtns from "../components/CategoryBtns";
import { recipesApi } from "../utils";
import Recipes from "../components/Recipes";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");

  const toggleRecipes = (category) => {
    if (category === "all") {
      setCurrentCategory("all");
    } else {
      setCurrentCategory(category);
    }
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(recipesApi);
        const { recipes } = await response.json();
        setRecipes(recipes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <section className="menu">
      <div className="menu-center">
        <h1 className="title">Recipes</h1>
        <CategoryBtns
          recipes={recipes}
          toggleRecipes={toggleRecipes}
          currentCategory={currentCategory}
        />
        <Recipes recipes={recipes} currentCategory={currentCategory} />
      </div>
    </section>
  );
};
export default Home;
