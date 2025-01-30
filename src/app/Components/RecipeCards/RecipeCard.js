"use client";

import Card from "react-bootstrap/Card";

function RecipeCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Recipe title</Card.Title>
        <Card.Text>Recipe description.</Card.Text>
        <Card.Link href="#">Pop up to give ingredients?</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;
