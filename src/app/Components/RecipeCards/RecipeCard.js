"use client";

import Card from "react-bootstrap/Card";

function RecipeCard({ title, instructions, servings }) {
  return (
    <Card className="w-72 bg-white shadow-md rounded-lg overflow-hidden">
      <Card.Body>
        <Card.Title className="text-xl font-bold">{title}</Card.Title>
        <Card.Text className="text-gray-700 pb-2">{servings}</Card.Text>
        <Card.Text className="text-gray-700">{instructions}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;
