// Create a <Length> component. It should contain an <input> and tell you how many characters have been typed into the <input>.

import React, { Component } from "react";

class Length extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: "length checker"

    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState ({
      value: e.target.value
    })
  }

  render() {
    const { label, name } = this.props;
    const { value } = this.state

    return (
      <div className="form-group">
        <label>{ label }</label>
        <br/>
        <input onChange={ this.handleChange } value={ value } name={ name }></input>
        <p className="help-block">Length: { value.length }</p>
      </div>
    );
  }
}

export default Length;
