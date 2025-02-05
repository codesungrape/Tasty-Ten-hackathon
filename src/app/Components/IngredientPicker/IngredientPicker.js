"use client";
import React, { useState } from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

function IngredientPicker({ setSelectedIngredient }) {
  const [inputValue, setInputValue] = useState("");

  function handleClick(e) {
    const ingredient = e.target.value;
    console.log(`User has selected to search for ${ingredient}`);
    setSelectedIngredient(ingredient);

    // Reset input field if the button is clicked
    setInputValue("");
  }

  return (
    //https://www.magnet.co.uk/news/most-searched-leftover-ingredients/
    <div className="flex items-center justify-center mb-6">
      <ButtonToolbar
        aria-label="Toolbar with button groups"
        className="flex flex-col space-y-4"
      >
        <div className="me-2 flex" aria-label="First group">
          <Button
            value="chicken"
            aria-label="chicken"
            onClick={handleClick}
            className="bg-red-500 hover:bg-red-600 m-2 p-2 w-24 h-24 border rounded-full text-5xl flex items-center justify-center aspect-square"
          >
            🐔
          </Button>
          <Button
            value="pork"
            aria-label="pork"
            onClick={handleClick}
            className="bg-red-500 hover:bg-red-600 m-2 p-2 w-24 border rounded-full text-5xl flex items-center justify-center aspect-square"
          >
            🐷
          </Button>
          <Button
            value="beef"
            aria-label="beef"
            onClick={handleClick}
            className="bg-red-500 hover:bg-red-600 m-2 p-2 w-24 border rounded-full text-5xl flex items-center justify-center aspect-square"
          >
            🐮
          </Button>
        </div>
        <div
          className="flex items-center justify-center mb-6"
          aria-label="Second group w-24 border rounded"
        >
          <Button
            value="corn"
            aria-label="corn"
            onClick={handleClick}
            className="bg-amber-500 hover:bg-amber-600 m-2 p-2 w-24 border rounded-full text-5xl flex items-center justify-center aspect-square"
          >
            🌽
          </Button>
          <Button
            value="fish"
            aria-label="fish"
            onClick={handleClick}
            className="bg-amber-500 hover:bg-amber-600 m-2 p-2 w-24 border rounded-full text-5xl flex items-center justify-center aspect-square"
          >
            🐟
          </Button>
          <Button
            value="potato"
            aria-label="potato"
            onClick={handleClick}
            className="bg-amber-500 hover:bg-amber-600 m-2 p-2 w-24 border rounded-full text-5xl flex items-center justify-center aspect-square"
          >
            🥔
          </Button>
        </div>
      </ButtonToolbar>
      <div>
        <ButtonGroup aria-label="Third group" className="flex flex-row">
          <input
            type="text"
            aria-label="input-field"
            placeholder="...or type your own"
            value={inputValue} // binds input value
            onChange={(e) => setInputValue(e.target.value)} // updates the state
          />
          <Button
            aria-label="Submit-btn"
            value={inputValue}
            onClick={handleClick}
          >
            Submit text
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default IngredientPicker;
