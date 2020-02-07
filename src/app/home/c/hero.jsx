import React, { Component } from "react";
import Layer1 from "../svg/layer1";
import Layer2 from "../svg/layer2";
import Layer3 from "../svg/layer3";
import Layer4 from "../svg/layer4";

export class hero extends Component {
  render() {
    return (
      <div id="hero">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h1>tyler berens</h1>
              <h2 className="c">developer & creative</h2>
              <button>SEE MY WORK</button>
            </div>
            <div className="col-sm-12 col-md-6">
              <h3 className="c fix">full-stack developer</h3>
            </div>
          </div>
        </div>
        <Layer1 />
        <Layer2 />
        <Layer3 />
        <Layer4 />
      </div>
    );
  }
}

export default hero;
