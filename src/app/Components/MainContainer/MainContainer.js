"use client";
import IngredientPicker from "../IngredientPicker/IngredientPicker";
import ControlledCarousel from "../RecipeCarousel/RecipeCarousel";
import { useState } from "react";

export default function MainContainer() {
  const [foodData, setFoodData] = useState([]);

  // Fetch the data from the our backend/handledata.js file
  // Ingredient variable stores the value of onClick event object
  const fetchData = async (ingredient) => {
    try {
      const response = await fetch(`/api/handledata?query=${ingredient}`);
      const data = await response.json();
      console.log(data);
      // Store the fetched data in state
      setFoodData(data);
    } catch (error) {
      console.error(`Error fetching data:`, error);
    }
  };

  return (
    <section className="main-container bg-yellow-950 p-6 rounded-lg shadow-lg">
      <IngredientPicker setSelectedIngredient={fetchData} />
      <ControlledCarousel recipes={foodData} />
    </section>
  );
}
