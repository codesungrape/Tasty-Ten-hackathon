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
    test("should call setSelectedIngredient with correct value when user enters custom search value", async () => {
      // arrange
      const input = screen.getByPlaceholderText("...or type your own");
      await userEvent.type(input, "carrot");
      expect(input.value).toBe("carrot");
    });
    test("should call setSelectedIngredient with input value when submit button is clicked", () => {
      //arrange
      const input = screen.getByPlaceholderText("...or type your own");
      const submitButton = screen.getByText("Submit text");

      //act
      fireEvent.change(input, { target: { value: "carrot" } });
      fireEvent.click(submitButton);

      //Assert- check if setSelectedIngredient was called with the input value
      expect(mockSetSelectedIngredient).toHaveBeenCalledTimes(1);
      expect(mockSetSelectedIngredient).toHaveBeenCalledWith("carrot");
    });
    test("should clear input after submitting", () => {
      //arrange
      const input = screen.getByPlaceholderText("...or type your own");
      const submitButton = screen.getByText("Submit text");

      //act
      fireEvent.change(input, { target: { value: "carrot" } });
      fireEvent.click(submitButton);

      //Assert
      expect(mockSetSelectedIngredient).toHaveBeenCalledTimes(1);
      expect(input.value).toBe("");
    });
  });
  describe("Accessibility", () => {
    test("should have proper ARIA labels for toolbar and groups", () => {
      const toolbar = screen.getByLabelText("Toolbar with button groups");
      expect(toolbar).toBeInTheDocument();

      const firstGroup = screen.getByLabelText("First group");
      expect(firstGroup).toBeInTheDocument();

      const thirdGroup = screen.getByLabelText("Third group");
      expect(thirdGroup).toBeInTheDocument();
    });

    test("should have correct aria-labels for the ingredient buttons", () => {
      const chickenButton = screen.getByLabelText("chicken");
      expect(chickenButton).toBeInTheDocument();

      const porkButton = screen.getByLabelText("pork");
      expect(porkButton).toBeInTheDocument();

      const beefButton = screen.getByLabelText("beef");
      expect(beefButton).toBeInTheDocument();

      const cornButton = screen.getByLabelText("corn");
      expect(cornButton).toBeInTheDocument();

      const fishButton = screen.getByLabelText("fish");
      expect(fishButton).toBeInTheDocument();

      const potatoButton = screen.getByLabelText("potato");
      expect(potatoButton).toBeInTheDocument();
    });
    test("should have correct aria-labels for the input field", () => {
      const input = screen.getByLabelText("input-field");
      expect(input).toBeInTheDocument();
    });
    test("should have correct aria-labels for the submit button", () => {
      const submitButton = screen.getByLabelText("Submit-btn");
      expect(submitButton).toBeInTheDocument();
    });
  });
  describe("Component Structure", () => {
    test("should render all preset ingredient buttons", () => {
      const buttons = ["🐔", "🐷", "🐮", "🌽", "🐟", "🥔"];
      buttons.forEach((emoji) => {
        expect(screen.getByText(emoji)).toBeInTheDocument();
      });
    });
  });
});
