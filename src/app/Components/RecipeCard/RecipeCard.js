"use client";

import Card from "react-bootstrap/Card";

function RecipeCard({ title, instructions, servings }) {
  return (
    <Card className="w-80 bg-[#fef9f3] shadow-lg rounded-xl border border-[#e0c3a4] overflow-hidden transform transition duration-300 hover:scale-105">
      <Card.Body className="p-6">
        <Card.Title className="text-2xl font-semibold text-[#8b5e3c] font-serif">
          {title}
        </Card.Title>
        <Card.Text className="text-sm text-gray-600 italic mb-2">
          Servings: {servings}
        </Card.Text>
        <Card.Text className="text-gray-800 font-light leading-relaxed">
          {instructions}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;
