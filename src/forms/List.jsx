// Create a <List> component that consists of a <ul>, an <input>, and a <button>Add</button>. When you click the "Add" button, whatever is in the <input> should get added to the <ul>.

import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: "add to the list above!",
      list: ["hello", "potato"]
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState ({
      value: e.target.value,
    })
  }

  handleClick() {
    const { value, list } = this.state;

    this.setState ({
      value: "",
      list: list.concat([value])
    })
  }

  render() {

    const { value, list } = this.state;
    const { name } = this.props

    return (
      <React.Fragment>
        <ul>
          { list.map((a, i) => (
            <li key={ i }>{ a }</li>
          ))}
        </ul>
        <input onChange={ this.handleChange } value={ value } name={ name }></input>
        <button onClick={ this.handleClick }>Add</button>
      </React.Fragment>
    );
  }
}

export default List;
