// Create a component <Max count={ numbers }> that you pass an array of numbers. For each number in the array it should display one of your <Counter> components with that number as the initial value. The counter with the highest value should be highlighted. (You will need to change your <Counter> component, so make sure you've got a copy of your original - or use Git)

import React, { Component } from "react";
import Counter from '../state/Counter';

class Max extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numbers: props.count.map(a => ({
        label: a
      }))
    }
  }

  render() {
    console.log(this.state.numbers)

    return (
      <React.Fragment>
        { this.state.numbers.map(({ label }, i) => (
          <Counter
            key={ i }
            label={ label }
            max={ this.props.max }

            // onChange={ e => this.handleChange(e, i) }
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Max;
