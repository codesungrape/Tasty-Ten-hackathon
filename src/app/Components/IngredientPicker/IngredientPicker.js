"use client";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

function IngredientPicker({ setSelectedIngredient }) {
  return (
    <div className="flex items-center justify-center">
      <ButtonToolbar
        aria-label="Toolbar with button groups"
        className="flex flex-col space-y-4"
      >
        <ButtonGroup className="me-2" aria-label="First group">
          <Button onClick={() => setSelectedIngredient("chicken")}>
            chicken
          </Button>
          <Button onClick={() => setSelectedIngredient("pork")}>pork</Button>
          <Button onClick={() => setSelectedIngredient("beef")}>beef</Button>
        </ButtonGroup>
        <ButtonGroup className="me-2" aria-label="Second group">
          <Button onClick={() => setSelectedIngredient("pasta")}>pasta</Button>
          <Button onClick={() => setSelectedIngredient("rice")}>rice</Button>
          <Button onClick={() => setSelectedIngredient("potato")}>
            potato
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}

export default IngredientPicker;
