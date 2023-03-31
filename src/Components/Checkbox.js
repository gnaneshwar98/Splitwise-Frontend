import React from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

export default function Checkbox() {
  return (
    <DropdownMultiselect
        options={["Australia", "Canada", "USA", "Poland", "Spain", "France"]}
        name="countries"
      />
  )
  
}
