import React from "react";
//import squareStyle from './style.jsx'; this is redundant now we pass in an a default statment

const Square = ({ colour }) => (
  <div style={{ height: 200, width: 200, backgroundColor: colour }}/>
)

Square.defaultProps = {
  colour: "pink"
}

export default Square;
