// Create a component <Squares> that displays two of your <Square> components. As before, when clicked the border colour should change. But only one of the <Square>s should show the given colour at once.

import React, { Component } from "react";
import Square from "../Square";

class Squares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: true
    };
  }

  handleClick(div) {
    this.setState({
      counter: !this.state.counter
    })
  }

  render() {
    const { colour } = this.props
    const { counter } = this.state
    return (
      <React.Fragment>
        <Square colour={ colour } selected={ counter === true } onClick={ () => this.handleClick(1)} />
        <br/>
        <Square colour={ colour } selected={ counter === false } onClick={ () => this.handleClick(2)} />
      </React.Fragment>
    );
  }
}

export default Squares;
