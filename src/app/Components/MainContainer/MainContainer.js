"use client";
import IngredientPicker from "../IngredientPicker/IngredientPicker";
import ControlledCarousel from "../RecipeCarousel/RecipeCarousel";
import { useState, useEffect } from "react";

export default function MainContainer() {
  // Initializing state here
  const [foodData, setFoodData] = useState([]);

  // Initialize useEffect
  useEffect(() => {
    // Fetch the data from the backend
    const fetchData = async () => {
      const response = await fetch("/api/handledata");
      // Parse it to json
      const data = await response.json();
      // Store the fetched data in state
      setFoodData(data);
    };

    fetchData(); // call fetch data here
  }, []); // just once as shown by empty dependency array

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
      <IngredientPicker />
      <ControlledCarousel recipes={foodData} />
    </section>
  ); // Passing state down the component tree as props
}
