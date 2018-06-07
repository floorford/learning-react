// Create a <Form fields={ fields } /> component. It should take an array of field names as a prop. For each field name you should output an <input> with an appropriate <label>. When the form is submitted it should highlight any fields that are empty with a red outline and display a message saying that the field is required.
//
// let fields = ["First Name", "Last Name", "Email"];

import React, { Component } from "react";
import Input from './Input';

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fields: props.fields.map(a => ({
        label: a,
        value: "",
        colour: "black",
        haveTyped: false
      })),
      disp: "none",
      isValid: true,
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e, i) {
    let fields = this.state.fields.slice();

    fields[i].value = e.target.value;

    fields[i].haveTyped = true;

    this.setState({
      fields: fields
    });

    if ( this.state.fields.every(({ value }) => value) ) {
      this.setState({
        isValid: true,
        disp: "none"
      })
    }
  }

  handleClick() {
    if ( !this.state.fields.every(({ value }) => value) ) {
      this.setState({
        disp: "block",
        isValid: false,
      })
    }
  }

  render() {
    let fields = this.state.fields.slice();
    console.log(fields);
    let errorMessage = "bad"
    //fields.filter(x => x.value < 1); need to access index of the one which doesnt have a value and show the label

    return (
      <form className="form-group">
        { this.state.fields.map(({ label, value, colour, haveTyped }, i) => (
          <Input
            key={ i }
            label={ label }
            value={ value }
            colour={ colour }
            haveTyped={ haveTyped }
            isValid={ this.state.isValid }

            onChange={ e => this.handleChange(e, i) }
          />
        ))}
        <p style={{display: `${this.state.disp}`}} className="help-block">{ errorMessage }</p>
        <br/>
        <button
          onClick={ this.handleClick }
          className="btn btn-info"
          disabled= { this.state.isValid ? false : true }
        >Submit</button>
      </form>
    );
  }
}

export default Form;

// valid= { !this.state.fields.every(({ value }) => value.length >= minimumLength) }
// disabled={ !this.state.fields.every(({ value }) => value.length >= minimumLength ) }
