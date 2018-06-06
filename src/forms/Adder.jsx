// Create an <Adder> component. It should have a number <input> field and two <button>s, "Add" and "Total". When the "Add" button is pressed the number should be added to a list of numbers on screen. When the "Total" button is pressed the total of all the numbers in the list should be displayed.

import React, { Component } from "react";

class Adder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0,
      list: [ ],
      total: 0
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleAdd = this.handleAdd.bind(this)

  }

  handleChange(e) {

    this.setState ({
      value: e.target.value,
      list: this.state.list,
      total: 0
    })
  }

  handleClick() {
    const { value, list } = this.state;

    let newList = +value

    this.setState ({
      value: value,
      list: list.concat([newList]),
      total: 0
    })
  }

  handleAdd() {
    const { value, list } = this.state;

    this.setState ({
      value: value,
      list: list,
      total: list.reduce((acc, val) => acc + val, 0)
    })
  }

  render() {
    const { label, name } = this.props;
    const { list, total } = this.state

    return (
      <div className="form-group">
        <label>{ label }</label>
        <br/>
        <input type="number" onChange={ this.handleChange } name={ name }></input>
        <button onClick={ this.handleClick }>Add</button>
        <button onClick={ this.handleAdd }>Total</button>
        <ul>
          { list.map((a, i) => (
            <li key={ i }>{ a }</li>
          ))}
        </ul>
        <p className="help-block">Total: { total }</p>
      </div>
    );
  }
}

export default Adder;
