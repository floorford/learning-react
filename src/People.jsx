import React from "react";

const People = ({ names }) => (
  <ul className="list-group">
    { names ? names.map((a, i) => (
        <li className="list-group-item" key={ i }>
          { a }
        </li>
    )) : null }
  </ul>
);

People.defaultProps = {
    names: ["Nothing to see here...", "...Move it along"]
};


export default People;
