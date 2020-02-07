import React, { Component } from "react";
import "./home.scss";
import Hero from "./c/hero";

export class home extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="home">
          <Hero />
        </div>
        <div id="content"></div>
      </React.Fragment>
    );
  }
}

export default home;
