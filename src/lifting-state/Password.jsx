// Create a component <Password label="Password"> that contains an <input> with a <label>. Inside a <SignUp minimumLength={ 12 }> component put two of these <Password> components: one should have the label "Password" and the other "Confirm Password". Both <Password> components should have a red border unless they are longer than minimumLength and match each other.

import React from "react";

const Password = ({ label, value, name, onChange, valid }) => (
    <React.Fragment>
      <label>{label}:</label>
      <br/>
      <input className="form-control" onChange={ onChange } name={ name } value={ value } style={{border: `2px solid ${valid ? "red" : "black"}`}}/>
      <p className="help-block">Length: { value.length } characters</p>
    </React.Fragment>
);

export default Password;

// style={`border: ${ valid ? "red" : "black" }`}
// border: `4px solid ${selected ? "black" : colour}`
