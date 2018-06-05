// Update your <Square colour="hotpink"> component so that the border starts black, but when it is clicked it changes to the passed in colour. It should alternate every time you click.

import React, { Component } from "react";

class Square extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: true
    };

    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    this.setState({
      counter: !this.state.counter
    });
  }

  render () {
    const { counter } = this.state;
    const { colour } = this.props;
    const bordercolour = counter ? "black" : colour;

    return (
      <div onClick={ this.clicked }
        style={{
          height: 200,
          width: 200,
          backgroundColor: "pink",
          border: `4px solid ${bordercolour}`
        }}
      />
    );
  }
}

export default Square;
