import React from "react";

const Paragraph = ({ children }) => (
  <p>{ children }</p>
)

Paragraph.defaultProps  = {
  message: "hello, world."
};

export default Paragraph;
