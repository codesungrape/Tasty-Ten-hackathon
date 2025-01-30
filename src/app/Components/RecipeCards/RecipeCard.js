"use client";

import Card from "react-bootstrap/Card";

function RecipeCard({ title, ingredients, servings }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{servings}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;
