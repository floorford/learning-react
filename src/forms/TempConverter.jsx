// Create a <TempConverter> component. It should have a °F and °C <input>. When you type a number into one <input> it should update the value in the other.

import React, { Component } from "react";

class TempConverter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      far: "",
      cen: ""
    }
    this.handleFar = this.handleFar.bind(this)
    this.handleCen = this.handleCen.bind(this)
  }

  handleFar(e) {
    const { toFar } = this.props;

    let answer = toFar(+e.target.value);


    this.setState ({
      far: +e.target.value,
      cen: answer.toFixed(2)
    })
  }

  handleCen(e) {
    const { toCen } = this.props;

    let answer = toCen(+e.target.value);

    this.setState ({
      far: answer.toFixed(2),
      cen: +e.target.value
    })
  }

  render() {
    const { far, cen } = this.state;
    return (
      <React.Fragment>
        <p>Convert Centigrade to Fahrenheit or vice versa below!</p>
        <label>°Fahrenheit</label>
        <input onChange={ this.handleFar } type="number" name="fahrenheit" value={ far }></input>
        <br/>
        <label>°Centigrade</label>
        <input onChange={ this.handleCen } type="number" name="centigrade" value={ cen }></input>
      </React.Fragment>
    );
  }
}

export default TempConverter;
