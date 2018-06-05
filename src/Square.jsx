import React, { Component } from "react";

class Square extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render () {
    const { counter } = this.state;
    let colour;
    counter % 2 === 0 ? colour = "black" : colour = "hotpink";

    return (
      <div onClick={ this.clicked }
        style={{
          height: 200,
          width: 200,
          backgroundColor: "pink",
          border: `4px solid ${colour}`
        }}
      />
    );
  }
}

export default Square;

// Update your <Square colour="hotpink"> component so that the border starts black, but when it is clicked it changes to the passed in colour. It should alternate every time you click.
