// Create a component <Password label="Password"> that contains an <input> with a <label>. Inside a <SignUp minimumLength={ 12 }> component put two of these <Password> components: one should have the label "Password" and the other "Confirm Password". Both <Password> components should have a red border unless they are longer than minimumLength and match each other.

//couldn't get matching to work, moving on for now!

import React, { Component } from "react";
import Password from './Password';

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fields: props.fields.slice()
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e, i) {
    let fields = this.state.fields.slice();

    fields[i].value = e.target.value;

    this.setState({
      fields: fields
    });
  }

  render() {
    const { minimumLength } = this.props
    let password = this.state.fields[0].value
    let confirm = this.state.fields[1].value

    return (
      <form className="form-group">
        { this.state.fields.map(({ label, name, value, valid }, i) => (
          <Password
            key={ name }
            label={ label }
            name={ name }
            value={ value }
            valid= { !this.state.fields.every(({ value }) => confirm === password && value.length >= minimumLength) }

            onChange={ e => this.handleChange(e, i) }
          />
        ))}
        <br/><br/>
        <button
          disabled={ !this.state.fields.every(({ value }) => confirm === password && value.length >= minimumLength ) }
          className="btn btn-success"
        >Submit</button>
      </form>
    );
  }
}

export default SignUp;
