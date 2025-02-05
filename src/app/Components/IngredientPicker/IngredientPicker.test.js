import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IngredientPicker from "./IngredientPicker";

describe("IngredientPicker", () => {
  // setup mock function of 'SetSelectedIngredient' - you prepend the fucntion you are testing with 'mock'
  const mockSetSelectedIngredient = jest.fn();

  // setup fucntion to render compoenent before each test
  beforeEach(() => {
    render(
      <IngredientPicker setSelectedIngredient={mockSetSelectedIngredient} />
    );

    // clear mock calls between tests
    mockSetSelectedIngredient.mockClear();
  });

  describe("Preset ingredient buttons", () => {
    test("should call setSelectedIngredient with correct value when meat buttons are clicked", () => {
      // Arrange
      // test chicken button
      const chickenButton = screen.getByText("🐔");

      //Act
      // simulate the userclick
      fireEvent.click(chickenButton);

      //Assert
      expect(mockSetSelectedIngredient).toHaveBeenCalledWith("chicken");
    });
  });
});
