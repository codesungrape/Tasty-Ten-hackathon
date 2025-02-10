"use client";
import { useState } from "react";
import IngredientPicker from "../ingredientPicker/IngredientPicker";
import ControlledCarousel from "../recipeCarousel/RecipeCarousel";

export default function MainContainer() {
  const [foodData, setFoodData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (ingredient) => {
    if (!ingredient) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/handleData?query=${encodeURIComponent(ingredient)}`
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }

      const data = await response.json();

      if (!data || (Array.isArray(data) && data.length === 0)) {
        setError("No recipes found. Try a different ingredient!");
        setFoodData([]);
        return;
      }

      console.log("API Response:", data);
      setFoodData(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error("Error details:", {
        message: error.message,
        type: error.type,
        stack: error.stack,
      });
      setError("Failed to fetch recipes. Please try again.");
      setFoodData([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="main-container bg-yellow-950 p-6 rounded-lg shadow-lg">
      <IngredientPicker setSelectedIngredient={fetchData} />

      {error && (
        <div className="text-red-500 bg-red-100 p-4 rounded-md mt-4 mb-4">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="text-white text-center p-4">Loading recipes...</div>
      ) : (
        <ControlledCarousel recipes={foodData} />
      )}
    </section>
  );
}
