// Create the <Button> and <Buttons> components from the notes. Once you're done, update it so that it displays four <Button>s. Make sure only one of them can be turned on at once.

import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <Button name="Third" selected={ this.state.selected === 3 } onClick={ () => this.handleClick(3)} />
        <Button name="Fourth" selected={ this.state.selected === 4 } onClick={ () => this.handleClick(4)} />
        <br/>
        <br/>
        <p>Add a colour of your choice to the end of this url: localhost:3000/squares/____ to see pretty squares!</p>
        <br/>
        <br/>
        <p>Add a max number and then an increment of your choice to the end of this url: localhost:3000/steps/____/____ to see a cool step counter!</p>
        <br/>
        <br/>
        <Link to="/wordplay">Word Play Components</Link>
        <br/>
        <Link to="/signup">Input Components</Link>
        <br/>
        <Link to="/numbershit">Numbery Components</Link>
        <br/>
        <Link to="/crapgames">Crap Game-like Components</Link>
        <br/>
        <Link to="/misc">Miscellaneous Components</Link>
      </React.Fragment>
    );
  }
}

export default Buttons;
