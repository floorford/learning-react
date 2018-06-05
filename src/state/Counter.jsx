// Create a <Counter initial={ 50 } max={ 100 } /> component. It should consist of a <p> containing a number (which starts at the initial value) and two buttons, + and -. When the user clicks the + button, the number should go up. When the user clicks the - button the number should go down. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props)

    let { initial } = this.props;

    this.state = {
      counter: initial
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleSub = this.handleSub.bind(this);
  }

  handleAdd() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  handleSub() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render () {
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

export default Counter;
