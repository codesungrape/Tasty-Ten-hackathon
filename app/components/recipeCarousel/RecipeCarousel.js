"use client";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import RecipeCard from "../recipeCard/RecipeCard";

function RecipeCarousel({ recipes = [] }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  if (!recipes || recipes.length === 0) {
    return (
      <div className="text-center text-white mt-6 p-4">
        No recipes to display. Try searching for an ingredient!
      </div>
    );
  }

  const recipeArray = Array.isArray(recipes) ? recipes : [recipes];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="mt-6">
      {recipeArray.map((item, index) => (
        <Carousel.Item key={index}>
          <div className="flex justify-center">
            <RecipeCard
              title={item.title}
              ingredients={item.ingredients}
              instructions={item.instructions}
              servings={item.servings}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default RecipeCarousel;
