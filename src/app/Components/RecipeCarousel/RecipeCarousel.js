"use client";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../CarouselImage/ExampleCarouselImage";
import RecipeCard from "../RecipeCards/RecipeCard";

function RecipeCarousel({ recipes }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  console.log(recipes);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {recipes.map((item, index) => (
        <Carousel.Item key={index}>
          <div className="flex justify-center">
            <RecipeCard
              title={item.title}
              ingredients={item.ingredients}
              servings={item.servings}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default RecipeCarousel;
