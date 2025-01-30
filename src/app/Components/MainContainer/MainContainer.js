"use client";
import IngredientPicker from "../IngredientPicker/IngredientPicker";
import ControlledCarousel from "../RecipeCarousel/RecipeCarousel";
import { useState, useEffect } from "react";

export default function MainContainer() {
  // Initializing state here
  const [foodData, setFoodData] = useState([]);

  // Fetch the data from the backend
  // Takes ingredient as an argument
  const fetchData = async (ingredient) => {
    try {
      const response = await fetch(`/api/handledata?query=${ingredient}`);
      console.log(response);
      // Parse it to json
      const data = await response.json();
      console.log(data);
      // Store the fetched data in state
      setFoodData(data);
    } catch (error) {
      console.error(`Error fetching data:`, error);
    }
  };

  return (
    <section
      className="main-container bg-slate-400"
      style={{
        border: "2px solid black", // Border color and thickness
        padding: "20px", // Padding inside the container
        margin: "10px", // Margin outside the container
        borderRadius: "8px", // Optional: Rounded corners
      }}
    >
      <IngredientPicker setSelectedIngredient={fetchData} />
      <ControlledCarousel recipes={foodData} />
    </section>
  ); // Passing state down the component tree as props
}
