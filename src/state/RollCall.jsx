// Create a <RollCall names={ names }> component. It should have a button "Next". When the component first loads it should show the first name in the array. Every time you click "Next" it should show the next name in the array. It should loop back to the beginning.

import React, { Component } from "react";

class RollCall extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let { names } =  this.props;
    const { counter } = this.state

    this.setState({
      counter: (counter + 1) % names.length // use ternary if descending
    })
  }

  render() {
    const { names } = this.props;
    const { counter } = this.state;

    return (
      <React.Fragment>
        <p>{ names[counter] }</p>
        <button onClick={ this.handleClick }>Next!</button>
      </React.Fragment>
    );
  }
}

export default RollCall;
