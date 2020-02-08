import React, { Component } from "react";
import "./work.scss";
import Header from './header';
import { Link } from "react-router-dom";

export class work extends Component {
  render() {
    return (
      <div id="work">
        <div>
          <Header />
          <div id="sidelinks">
            <Link to="/" className="line1">
                    <li>Home</li>
            </Link>
            <a className="line2">Work</a>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h1>work</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default work;
