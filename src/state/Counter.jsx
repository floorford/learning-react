// Create a component <Max count={ numbers }> that you pass an array of numbers. For each number in the array it should display one of your <Counter> components with that number as the initial value. The counter with the highest value should be highlighted. (You will need to change your <Counter> component, so make sure you've got a copy of your original - or use Git)

import React from "react";

const Counter = ({ label, max, onClickAdd, onClickSub, initial, highlighted }) => {
  // highlighted === true ? "aliceblue" : "white"
  return (
    <div>
      <h3>Counter { label }</h3>
      <p>{ initial }</p>
      <button onClick={ onClickAdd }>+</button>
      <button onClick={ onClickSub }>-</button>
    </div>
  );
}

// style={{ border: `2px dotted ${ highlighted}` }}

export default Counter;
//onClick in html always has to be onClick, onChange etc.
// put max in the parent, stores data, so if you went 5 over the max you'd have to press - many times again
// do the highlighting, highest value, boolean selected use for styling that counter!
