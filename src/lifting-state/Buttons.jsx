// Create the <Button> and <Buttons> components from the notes. Once you're done, update it so that it displays four <Button>s. Make sure only one of them can be turned on at once.

import React, { Component } from "react";
import Button from "./Button";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 1 };
  }

  handleClick(button) {
    this.setState({
      selected: button
    })
  }

  render() {
    return (
      <React.Fragment>
        <Button name="First" selected={ this.state.selected === 1 } onClick={ () => this.handleClick(1)} />
        <Button name="Second" selected={ this.state.selected === 2 } onClick={ () => this.handleClick(2)} />
      </React.Fragment>
    );
  }
}

export default Buttons;
