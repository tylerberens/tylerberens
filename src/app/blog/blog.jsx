import React, { Component } from "react";
import "./blog.scss";
import Header from './header';
import { Link } from "react-router-dom";

export class blog extends Component {
  render() {
    return (
      <div id="blog">
        <div>
          <Header />
          <div id="sidelinks">
            <Link to="/" className="line1">
                    <li>Home</li>
            </Link>
            <a className="line2">Blog</a>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h1>blog</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default blog;
