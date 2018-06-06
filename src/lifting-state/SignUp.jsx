// Create a component <Password label="Password"> that contains an <input> with a <label>. Inside a <SignUp minimumLength={ 12 }> component put two of these <Password> components: one should have the label "Password" and the other "Confirm Password". Both <Password> components should have a red border unless they are longer than minimumLength and match each other.

import React, { Component } from "react";
import Password from './Password';

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: "Insert password here"
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      value : e.target.value
    })
  }

  render() {
    return (
      <form>
        <Password label="Password" onChange={ () => this.handleChange(2)}/>
        <br/><br/>
        <Password label="Confirm Password" onChange={ () => this.handleChange(2)}/>
      </form>
    );
  }
}

export default SignUp;
