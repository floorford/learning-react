// Create <ToggleText initial="Hello" alternate="World"> component. It should consist of a <p> and a <button>Toggle</button>. When the <button> is clicked the text of the <p> tag should alternate between initial and alternate.

import React, { Component } from "react";

class ToggleText extends Component {
  constructor(props){
    super(props)

    this.state = {
      counter: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: !this.state.counter
    });
  }

  render() {
    let { initial, alternate } = this.props;
    const { counter } = this.state

    return (
      <React.Fragment>
        <p>{ counter ? initial : alternate }</p>
        <button onClick={ this.handleClick }>
          Toggle
        </button>
      </React.Fragment>
    );
  }
}

export default ToggleText;
