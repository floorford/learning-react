// Create a <RollCall names={ names }> component. It should have a button "Next". When the component first loads it should show the first name in the array. Every time you click "Next" it should show the next name in the array. It should loop back to the beginning.

import React, { Component } from "react";

class RollCall extends Component {
  constructor(props) {
    super(props)

    let { names } =  this.props;

    this.state = {
      counter: 0,
      list: names[0]
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let { names } =  this.props;

    this.setState({
      counter: this.state.counter >= names.length - 1 ? 0 : this.state.counter + 1,
      list: names[this.state.counter]
    })
  }

  render() {
    const { list } = this.state;

    return (
      <React.Fragment>
        <p>{ list }</p>
        <button onClick={ this.handleClick }>Next!</button>
      </React.Fragment>
    );
  }
}

export default RollCall;
