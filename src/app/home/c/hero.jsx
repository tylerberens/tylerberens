import React, { Component } from "react";
import Layer1 from "../svg/layer1";
import Layer2 from "../svg/layer2";
import Layer3 from "../svg/layer3";
import Layer4 from "../svg/layer4";
import { Link } from "react-router-dom";
import './hero.scss';

export class hero extends Component {
  render() {
    return (
      <div id="hero">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h1>tyler berens</h1>
              <h2 className="c">developer & creative</h2>
              <Link to="/work" className="seeMyWork">
                see my work
              </Link>
            </div>
            <div id="scrollDown" className="col-sm-12 col-md-6">
              <div className="arrow">
                <span>Scroll down</span>
                <div className="center">
                  <div className="chevron"></div>
                  <div className="chevron"></div>
                  <div className="chevron"></div>
                  <div className="chevron"></div>
                </div>
              </div>
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
