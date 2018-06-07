// Create a <Form fields={ fields } /> component. It should take an array of field names as a prop. For each field name you should output an <input> with an appropriate <label>. When the form is submitted it should highlight any fields that are empty with a red outline and display a message saying that the field is required.
//
// let fields = ["First Name", "Last Name", "Email"];

import React from "react";

const Input = ({ label, value, onChange, colour, haveTyped, isValid }) => {

  if (haveTyped && value < 1) {
    colour = "red"
  } else if (!isValid && value > 0) {
    colour = "black"
  } else if (!isValid && !haveTyped) {
    colour = "red"
  } else if (haveTyped && value > 0) {
    colour = "black"
  }

  return (
    <React.Fragment>
      <label>{ label }:</label>
      <input
        style={{ border: `2px solid ${ colour }` }} className="form-control" value={ value } onChange={ onChange }></input>
    </React.Fragment>
  )
};

export default Input;
