import React, { Component } from "react";
import Header from "../svg/header";
import "./work.scss";
import HR from "../components/hr";

export class work extends Component {
  render() {
    return (
      <div id="work">
        <div>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Work</h1>
              </div>
              <div className="employers col-12">
                <div className="employer">
                  <h2>Kingdom First Solutions</h2>
                  <HR color="var(--r)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default work;
