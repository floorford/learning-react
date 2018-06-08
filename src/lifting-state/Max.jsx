// Create a component <Max count={ numbers }> that you pass an array of numbers. For each number in the array it should display one of your <Counter> components with that number as the initial value. The counter with the highest value should be highlighted. (You will need to change your <Counter> component, so make sure you've got a copy of your original - or use Git)

import React, { Component } from "react";
import Counter from '../state/Counter';

class Max extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numbers: props.count.map(a => ({
        label: a,
        value: a,
      }))
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(i, amount) {
    let numbers = this.state.numbers.slice();
    // const { max } = this.props;

    // if (numbers[i].value >= max) {
    //   numbers[i].value = max
    // } else if (numbers[i].value <= 0) {
    //   numbers[i].value = 0
    // } else {
    //   numbers[i].value += amount
    // }
    //
    // numbers[i].value === max ? max :
    numbers[i].value += amount

    this.setState({
      numbers: numbers
    });
  }

  render() {
    // let numbers = this.state.numbers.slice();
    // let highest = Math.max(numbers);

    // let highlighted;

    return (
      <React.Fragment>
        { this.state.numbers.map(({ label, value }, i) => (
          <Counter
            key={ i }
            label={ label }
            initial={ value }
            // highlighted={ highlighted }

            onClickAdd={ () => this.handleChange(i, 1) }
            onClickSub={ () => this.handleChange(i, -1) }
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Max;
