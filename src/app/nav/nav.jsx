import React, { Component } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import Logo from "./logo";

export class nav extends Component {
  render() {
    return (
      <nav id="nav" className="navbar p-4" role="navigation">
        <div className="container-fluid">
          <div className="col-3">
          <ul className="d-flex flex-row justify-content-start">
            <Link to="/">
              <a className="logo">
                <Logo />
              </a>
            </Link>
          </ul>
          </div>
          <div className="col-9">
          <ul className="d-flex flex-row justify-content-end">
            <Link to="/resume">
              <li>Resume</li>
            </Link>
            <Link to="/work">
              <li>Work</li>
            </Link>
            <Link to="/blog">
              <li>Blog</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
          </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default nav;
