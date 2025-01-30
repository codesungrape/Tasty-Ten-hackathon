"use client";
import IngredientPicker from "../IngredientPicker/IngredientPicker";
import ControlledCarousel from "../RecipeCarousel/RecipeCarousel";

export default function MainContainer() {
  return (
    <section
      className="main-container"
      style={{
        border: "2px solid black", // Border color and thickness
        padding: "20px", // Padding inside the container
        margin: "10px", // Margin outside the container
        borderRadius: "8px", // Optional: Rounded corners
      }}
    >
      <IngredientPicker />
      <ControlledCarousel />
    </section>
  );
}
