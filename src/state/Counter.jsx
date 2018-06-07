// Create a component <Max count={ numbers }> that you pass an array of numbers. For each number in the array it should display one of your <Counter> components with that number as the initial value. The counter with the highest value should be highlighted. (You will need to change your <Counter> component, so make sure you've got a copy of your original - or use Git)

import React, { Component } from "react";

const Counter = ({ label, max }) => {
  return (
    <React.Fragment>
      <h3>Counter { label }</h3>
      <p>{ label >= max ? max : label && label <= 0 ? 0: label }</p>
      <button onClick={ this.handleAdd }>+</button>
      <button onClick={ this.handleSub }>-</button>
    </React.Fragment>
  );
}

export default Counter;
