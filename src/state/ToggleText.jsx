// Create <ToggleText initial="Hello" alternate="World"> component. It should consist of a <p> and a <button>Toggle</button>. When the <button> is clicked the text of the <p> tag should alternate between initial and alternate.

import React, { Component } from "react";

class ToggleText extends Component {
  constructor(props){
    super(props)

    this.state = {
      counter: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    let { initial, alternate } = this.props;
    const { counter } = this.state

    return (
      <React.Fragment>
        <p>{ counter % 2 === 0 ? initial : alternate }</p>
        <button onClick={ this.handleClick }>
          Toggle
        </button>
      </React.Fragment>
    );
  }
}

export default ToggleText;
