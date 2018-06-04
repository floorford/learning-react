import React from "react";

let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = () => (
  <ul className="list-group">
    { names.map((a, i) => (
        <li className="list-group-item" key={ i }>
          { a }
        </li>
    ))}
  </ul>
);

export default People;
