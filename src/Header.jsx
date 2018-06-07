import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render () {
    let { children } = this.props;

    return (
      <h1 className="page-header">
       <Link to="/">
          { children }
        </Link>
      </h1>
    )
  }
}

export default Header;
