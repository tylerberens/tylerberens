import React, { Component } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import Logo from "./logo";
import Cookies from "universal-cookie";

export class nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: false,
      top: "top p-4",
      side: true
    };

    this.toggleNavClick = this.toggleNavClick.bind(this);
    this.toggleNavSide = this.toggleNavSide.bind(this);
    this.toggleNavLogoClick = this.toggleNavLogoClick.bind(this);
  }
  toggleNavSide() {
    //set state for switching which side the mobile navigation is on
    this.setState(() => ({
      side: !this.state.side,
      x: !this.state.x
    }));

    //set local cookie to keep which side the users navigation toggle is on
    const cookies = new Cookies();
    var oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    cookies.set("nav", !this.state.side, {
      path: "/",
      expires: oneYearFromNow
    });

    //Append fixed body to avoid scrolling when navigation is open
    var root = document.getElementById("scroll-container");
    if(root.hasAttribute("class", "fixed")){
      root.removeAttribute("class");
    }
    else{
      root.setAttribute("class", "fixed");
    }
  }
  toggleNavLogoClick(){
    if(this.state.x === true){
      this.setState(() => ({
        x: !this.state.x
      }));
    }
    var root = document.getElementById("scroll-container");
    if(root.hasAttribute("class", "fixed")){
      root.removeAttribute("class");
    }
    else{
      root.setAttribute("class", "fixed");
    }
  }
  toggleNavClick() {
    this.setState(() => ({
      x: !this.state.x
    }));
    var root = document.getElementById("scroll-container");
    if(root.hasAttribute("class", "fixed")){
      root.removeAttribute("class");
    }
    else{
      root.setAttribute("class", "fixed");
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    
    //load cookies
    const cookies = new Cookies();
    if(cookies.get("nav") === "false"){
      this.setState(() => ({
        side: false
      }));
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if ((document.documentElement.scrollTop > 0)) {
      this.setState({ top: "fixed p-1"});
    }
    else{
      this.setState({ top: "top p-4"});
    }
  };
  render() {
    return (
      <nav
        id="nav"
        className={`navbar navbar-dark navbar-expand-lg ${this.state.top} `} role="navigation">
        <div className="container">
          <Link to="/" className="logo" onClick={this.toggleNavLogoClick}>
            <Logo />
          </Link>
          <button className={`navbar-toggler navbar-toggler-${this.state.side}`} onClick={this.toggleNavClick}>
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
            <button className={`navbar-toggler alternate navbar-toggler-${!this.state.side}`} onClick={this.toggleNavSide}>
              <div />
              <div />
              <div />
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default nav;
