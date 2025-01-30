"use client";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

function IngredientPicker({ setSelectedIngredient }) {
  function handleClick(e) {
    const selectedIngredient = e.target.value;
    console.log(`user has selected to search for ${selectedIngredient}`); //sometimes this logs before it has changed!
    setSelectedIngredient(selectedIngredient); // Call function from parent
  }
  return (
    <div className="flex items-center justify-center mb-6">
      <ButtonToolbar
        aria-label="Toolbar with button groups"
        className="flex flex-col space-y-4"
      >
        <ButtonGroup className="me-2" aria-label="First group">
          <Button
            value="chicken"
            onClick={handleClick}
            className="bg-red-500 hover:bg-red-600 m-2 p-2 w-24 border rounded"
          >
            Chicken
          </Button>
          <Button
            value="pork"
            onClick={handleClick}
            className="bg-red-500 hover:bg-red-600 m-2 p-2 w-24 border rounded"
          >
            Pork
          </Button>
          <Button
            value="beef"
            onClick={handleClick}
            className="bg-red-500 hover:bg-red-600 m-2 p-2 w-24 border rounded"
          >
            Beef
          </Button>
        </ButtonGroup>
        <ButtonGroup
          className="me-2"
          aria-label="Second group w-24 border rounded"
        >
          <Button
            value="pasta"
            onClick={handleClick}
            className="bg-amber-500 hover:bg-amber-600 m-2 p-2 w-24 border rounded"
          >
            Pasta
          </Button>
          <Button
            value="rice"
            onClick={handleClick}
            className="bg-amber-500 hover:bg-amber-600 m-2 p-2 w-24 border rounded"
          >
            Rice
          </Button>
          <Button
            value="potato"
            onClick={handleClick}
            className="bg-amber-500 hover:bg-amber-600 m-2 p-2 w-24 border rounded"
          >
            Potato
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
      <div>
        <ButtonGroup aria-label="Third group" className="flex flex-row">
          <input type="text" defaultValue="or type your own"></input>
          <Button onClick={handleClick}>Submit text</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default IngredientPicker;
