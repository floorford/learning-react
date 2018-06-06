// Create a <Transform transform={ fn }> component. It should accept a function that takes a number and returns a number (e.g. a squaring function x => x * x or an increment function x => x + 1). The component should have an <input type="number"> and a <p>. When the user types into the <input> the <p> should output the result of running the number through the transform function.

import React, { Component } from "react";

class Transform extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {

    this.setState ({
      value: e.target.value,
    })
  }

  render() {
    const { value } = this.state;
    const { transform } = this.props;

    let answer = transform(value);

    return (
      <React.Fragment>
        <input onChange={ this.handleChange } type="number"></input>
        <p>{ value } squared: { answer }</p>
      </React.Fragment>
    );
  }
}

export default Transform;
