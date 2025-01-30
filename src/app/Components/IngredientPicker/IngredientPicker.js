"use client";
import React from "react";
import { useState } from "react";

import { useScroll } from "@react-spring/web";
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
    <ButtonToolbar aria-label="Toolbar with button groups">
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
      <ButtonGroup aria-label="Third group">
        <input type="text" defaultValue="or type your own"></input>
        <Button onClick={handleClick}>Submit text</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default IngredientPicker;
