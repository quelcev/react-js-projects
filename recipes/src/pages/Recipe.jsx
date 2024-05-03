import { useParams } from "react-router-dom";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { recipesApi } from "../utils";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`${recipesApi}/${id}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipe();
  }, []);

  const {
    caloriesPerServing,
    cookTimeMinutes,
    image,
    ingredients,
    instructions,
    name,
    prepTimeMinutes,
    rating,
    servings,
  } = recipe;

  return (
    <section className="recipe">
      <div className="recipe-center">
        <Link to="/" className="back-to-recipes">
          <FaArrowLeft />
          <span>Recipes</span>
        </Link>

        <div className="recipe-container">
          <div className="img-container">
            <img src={image} alt={name} className="recipe-img" />
          </div>
          <div className="recipe-info">
            <h2 className="name">
              <span>{name}</span>
              <span className="rating">
                <strong>{rating}</strong>
                <FaStar />
              </span>
            </h2>
            <p className="ingredients">
              <strong>Ingredients:</strong>
            </p>
            <ul className="ingredients-list">
              {ingredients?.map((ingredient) => {
                return <li key={ingredient}>{ingredient}</li>;
              })}
            </ul>
            <p className="instructions">
              <strong>Instructions:</strong>
            </p>
            <ul className="instructions-list">
              {instructions?.map((instruction) => {
                return <li key={instruction}>{instruction}</li>;
              })}
            </ul>
            <div className="more-info">
              <p className="prep-time">
                Prep time: {prepTimeMinutes}mins<span></span>
              </p>
              <p className="cook-time">
                Cook time: {cookTimeMinutes}mins<span></span>
              </p>
              <p className="servings">
                Servings: {servings}
                <span></span>
              </p>
              <p className="calories">
                Calories per serving: {caloriesPerServing}
                <span></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Recipe;
