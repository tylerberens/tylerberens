import React, { Component } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";

export class nav extends Component {
  render() {
    return (
      <nav id="nav" className="navbar" role="navigation">
        <ul>
          <Link to="/">
            <li className="active">Home</li>
          </Link>
          <Link to="/work">
            <li>Work</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default nav;
