import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import "./home.css";

export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `https://rec-server-backend.onrender.com/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, [userID]);

  // Function to delete a recipe from wishlist
  const deleteSavedRecipe = async (recipeID) => {
    try {
      await axios.delete(
        `https://rec-server-backend.onrender.com/recipes/savedRecipes/${userID}/${recipeID}`
      );
      // Update state to remove the deleted recipe
      setSavedRecipes(savedRecipes.filter(recipe => recipe._id !== recipeID));
      alert("Recipe removed from wishlist!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", width: "100%" }}>Recipes You Have Added to Wishlist</h1>
      <ul>
        {savedRecipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
            </div>
            <p>{recipe.description}</p>
            <img src={recipe.imageUrl} alt={recipe.name} className="image" />
            <p>Cooking Time: {recipe.cookingTime} minutes</p>
            <button 
              className="delete-btn" 
              onClick={() => deleteSavedRecipe(recipe._id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
