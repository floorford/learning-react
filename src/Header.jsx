import React, { Component } from "react";

class Header extends Component {
  render () {
    let { children } = this.props;

    return (
      <h1 className="page-header">{ children }</h1>
    )
  }
}

export default Header;
