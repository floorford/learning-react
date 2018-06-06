// Update your <Square colour="hotpink"> component so that the border starts black, but when it is clicked it changes to the passed in colour. It should alternate every time you click.

import React from "react";

const Square = ({ colour, selected, onClick }) => (
  <div onClick={ onClick }
    style={{
      height: 200,
      width: 200,
      backgroundColor: "pink",
      border: `4px solid ${selected ? "black" : colour}`
    }}
  />
)

export default Square;
