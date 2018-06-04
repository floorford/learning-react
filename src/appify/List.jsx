import React from "react";

let numbers = ["Item 1", "Item 2", "Item 3", "Item 4"];

const List = () => (
  <ul className="list-group">
    { numbers.map((a, i) => (
        <li className="list-group-item" key={ i }>
          { a }
        </li>
    ))}
  </ul>
);

export default List;
