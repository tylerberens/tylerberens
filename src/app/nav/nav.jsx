import React, { Component } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import Logo from "./logo";

export class nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      x: false,
      top: true
    };
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    if(window.scrollY = 0){
      this.setState({top: true});
    }
    else if(window.scrollY > 100){
      this.setState({top: false});
      console.log(window.scrollY);
    }
  }
  render() {
    return (
      <nav id="nav" className={`navbar navbar-dark navbar-expand-lg p-4 ${this.state.top = true ? 'top' : 'not'}`} role="navigation">
        <div className="container-fluid">
        <Link to="/">
                  <Logo />
              </Link>
        <button className="navbar-toggler" onClick={() => this.setState({ x: !this.state.x })}>
          <div />
          <div />
          <div />
        </button>
          <div className={this.state.x ? 'navbar-collapse fadeDown': 'offScreen navbar-collapse'} id="navbarButton">
          <div id="backdrop"></div>
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
              <Link to="/resume">
                Resume
              </Link>
              </li>
              <li className="nav-item">
              <Link to="/work">
                Work
              </Link>
              </li>
              <li className="nav-item">
              <Link to="/blog">
                Blog
              </Link>
              </li>
              <li className="nav-item">
              <Link to="/about">
                About
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default nav;
