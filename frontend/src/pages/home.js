 import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import "./home.css";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("https://rec-server-backend.onrender.com/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
  }, []);

useEffect(() => {
  const fetchSavedRecipes = async () => {
    try {
      if (!userID) return; // 🛑 skip if userID is undefined
      const response = await axios.get(
        `https://rec-server-backend.onrender.com/recipes/savedRecipes/ids/${userID}`
      );
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  fetchSavedRecipes();
}, [userID]); // 👈 dependency on userID




  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("https://rec-server-backend.onrender.com/recipes", {
        recipeID,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div>
      <h1 style={{ textAlign: "center", width: "100%" }}>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div className="abc">
              <h2>{recipe.name}</h2>
              <button
                onClick={() => saveRecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}
              >
                {isRecipeSaved(recipe._id) ? "Added!" : "Add to Wishlist"}
              </button>
            </div>
            <div className="instructions">
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} className="image" />
            <p>Cooking Time: {recipe.cookingTime} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
}; 