"use client";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

function IngredientPicker() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleClick(e) {
    setSearchTerm(e.target.value);
    console.log(`user has selected to search for ${searchTerm}`); //sometimes this logs before it has changed!
    //use a function here handed down from props to return this search term to App level
  }

  return (
    <div className="flex items-center justify-center">
      <ButtonToolbar
        aria-label="Toolbar with button groups"
        className="flex flex-col space-y-4"
      >
        <ButtonGroup className="me-2" aria-label="First group">
          <Button value="chicken" onClick={handleClick}>
            chicken
          </Button>
          <Button value="pork" onClick={handleClick}>
            pork
          </Button>
          <Button value="beef" onClick={handleClick}>
            beef
          </Button>
        </ButtonGroup>
        <ButtonGroup className="me-2" aria-label="Second group">
          <Button value="pasta" onClick={handleClick}>
            pasta
          </Button>
          <Button value="rice" onClick={handleClick}>
            rice
          </Button>
          <Button value="potato" onClick={handleClick}>
            potato
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
