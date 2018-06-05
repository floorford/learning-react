// Create a <StepCounter max={ 100 } step={ 5 } /> component. It should consist of a <p> containing a number (start at 0) and two buttons, + and -. When the user clicks the + button, the number should go up by step. When the user clicks the - button the number should go down by step. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.

import React, { Component } from "react";

class StepCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleSub = this.handleSub.bind(this);
  }

  handleAdd() {
    let { step } = this.props;

    this.setState({
      counter: this.state.counter + step
    });
  }

  handleSub() {
    let { step } = this.props;

    this.setState({
      counter: this.state.counter - step
    });
  }

  render() {
    let { max } = this.props;
    const { counter } = this.state

    return (
      <React.Fragment>
        <p>{ counter >= max ? max : counter && counter <= 0 ? 0: counter }</p>
        <button onClick={ this.handleAdd }>+</button>
        <button onClick={ this.handleSub }>-</button>
      </React.Fragment>
    );
  }
}

export default StepCounter;
