import { render, screen } from "@testing-library/react";
import RecipeCard from "./RecipeCard";
import "@testing-library/jest-dom";
import Card from "react-bootstrap/Card";
import { describe } from "yargs";

describe("RecipeCard Component", () => {
  test("should render title, servings and inctructions correctly", () => {
    // render compoenets
    render(
      <RecipeCard
        title="Pasta"
        instructions="Boil water and insert pasta"
        servings="4"
      />
    );
    expect(screen.getByText("Pasta")).toBeInTheDocument();
    expect(screen.getByText("Boil water")).toBeInTheDocument();
    expect(screen.getByText("Servings: 4")).toBeInTheDocument();
  });
});
