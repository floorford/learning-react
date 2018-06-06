// Create a <CatchMeIfYouCan jump={ 100 }> component. It should have a <button> that when clicked moves 'jump' pixels down the screen.

import React, { Component } from "react";

class CatchMeIfYouCan extends Component {
  constructor(props) {
    super(props)

    this.state = {
      position: 100
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let { jump } = this.props;
    this.setState({
      position: this.state.position + jump
    })
  }

  render() {
    const { position } = this.state;

    return (
      <button onClick={ this.handleClick }
        style={{
          position: "absolute",
          left: 350,
          top: position
        }}
      >Jumpy Woo!</button>
    );
  }
}

export default CatchMeIfYouCan;
