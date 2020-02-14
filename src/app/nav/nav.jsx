import React, { Component } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import Logo from "./logo";

export class nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: false,
      top: true,
    };

    this.toggleNavClick = this.toggleNavClick.bind(this);
  }

  toggleNavClick() {
    this.setState(() => ({
      x: !this.state.x
    }));
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if ((window.scrollY = 0)) {
      this.setState({ top: !this.state.top});
    }
  };
  scrollTop() {
    var scrollPos = window.scrollY;
    if(scrollPos === 0){
      return "Top";
    }
  };
  render() {
    return (
      <nav
        id="nav"
        className={`navbar navbar-dark navbar-expand-lg offset-xl-1 col-xl-10 p-4 ${scrollTop()} `} role="navigation">
        <div className="container-fluid">
          <Link to="/" className="logo">
            <Logo />
          </Link>
          <button className="navbar-toggler" onClick={this.toggleNavClick}>
            <div />
            <div />
            <div />
          </button>
          <div
            className={
              this.state.x
                ? "navbar-collapse fadeDown"
                : "offScreen navbar-collapse"
            }
            id="navbarButton"
          >
            <div id="backdrop"></div>
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link to="/resume" onClick={this.toggleNavClick}>
                  Resume
                </Link>
              </li>
              <li className="nav-item" onClick={this.toggleNavClick}>
                <Link to="/work">Work</Link>
              </li>
              <li className="nav-item" onClick={this.toggleNavClick}>
                <Link to="/blog">Blog</Link>
              </li>
              <li className="nav-item" onClick={this.toggleNavClick}>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default nav;
