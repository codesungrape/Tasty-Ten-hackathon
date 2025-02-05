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

  describe("Preset ingredient button", () => {
    test("should call setSelectedIngredient with correct value when PRESET buttons are clicked", () => {
      const chickenButton = screen.getByText("🐔");
      fireEvent.click(chickenButton);
      expect(mockSetSelectedIngredient).toHaveBeenCalledTimes(1);
      expect(mockSetSelectedIngredient).toHaveBeenCalledWith("chicken");

      const porkButton = screen.getByText("🐷");
      fireEvent.click(porkButton);
      expect(mockSetSelectedIngredient).toHaveBeenCalledTimes(2);
      expect(mockSetSelectedIngredient).toHaveBeenCalledWith("pork");

      const beefButton = screen.getByText("🐮");
      fireEvent.click(beefButton);
      expect(mockSetSelectedIngredient).toHaveBeenCalledTimes(3);
      expect(mockSetSelectedIngredient).toHaveBeenCalledWith("beef");

      const cornButton = screen.getByText("🌽");
      fireEvent.click(cornButton);
      expect(mockSetSelectedIngredient).toHaveBeenCalledTimes(4);
      expect(mockSetSelectedIngredient).toHaveBeenCalledWith("corn");

      const fishButton = screen.getByText("🐟");
      fireEvent.click(fishButton);
      expect(mockSetSelectedIngredient).toHaveBeenCalledTimes(5);
      expect(mockSetSelectedIngredient).toHaveBeenCalledWith("fish");

      const potatoButton = screen.getByText("🥔");
      fireEvent.click(potatoButton);
      expect(mockSetSelectedIngredient).toHaveBeenCalledTimes(6);
      expect(mockSetSelectedIngredient).toHaveBeenCalledWith("potato");
    });
  });
  describe("Custom ingredient button", () => {
    test("should call setSelectedIngredient with correct value when user enters CUSTOM search value", async () => {
      // arrange
      const input = screen.getByPlaceholderText("...or type your own");
      await userEvent.type(input, "carrot");
      expect(mockSetSelectedIngredient).toHaveBeenCalledTimes(6);
      expect(input.value).toBe("carrot");
    });
    test("should call setSelectedIngredient with input value when submit button is clciked", () => {});
  });
});
