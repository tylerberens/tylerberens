import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './footer.scss';

export default class footer extends Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
     }
    
     componentDidMount() {
        window.addEventListener('load', this.handleLoad);
     }
     handleLoad() {
        var topLayerHeight = document.getElementById("topLayer");
        topLayerHeight.setAttribute("style", "margin-top: -" + Math.floor(topLayerHeight.offsetHeight) + "px");

        var footerHeight = document.getElementById("footer");
        var footerHeightThird = topLayerHeight.offsetHeight / 3;
        footerHeight.setAttribute("style", "margin-top: " + Math.floor(footerHeightThird) + "px");
     }

    render() {
        return (
            <div id="footer">
                <div id="topLayer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="110vw" viewBox="0 0 2088.697 285.462">
                        <defs>
                            <linearGradient id="linear-gradient2" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#040404"/>
                            <stop offset="1" stopColor="#0a0a0a"/>
                            </linearGradient>
                        </defs>
                        <path id="Path_19" data-name="Path 19" d="M3697.6,1146.328c-388.045-48.759-449.286,94.657-850.768,86.4s-534.912-164.306-755.159-119.441l-36.4,277.374h2088.7S4085.642,1195.086,3697.6,1146.328Z" transform="translate(-2055.271 -1105.195)" fill="url(#linear-gradient2)"/>
                    </svg>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <h3>lets talk</h3>
                        <div className="col-xs-12 col-md-7 m-800">
                            <div id="contact" className="row">
                                <div className="input-group col-xs-12 col-md-6">
                                    <label className="input-group-addon" htmlFor="name">full name</label>
                                    <input type="text" id="name" />
                                </div>
                                <div className="input-group col-xs-12 col-md-6">
                                    <label className="input-group-addon" htmlFor="name">email</label>
                                    <input type="email" id="email" />
                                </div>
                                <div className="input-group col-12">
                                    <label className="input-group-addon" htmlFor="msg">message</label>
                                    <textarea type="text" id="msg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 offset-md-1 col-md-3">
                            <ul id="footerNav">
                                <li className="footer-item">
                                    <Link to="/resume" onClick={this.toggleNavClick}>Resume</Link>
                                </li>
                                <li className="footer-item" onClick={this.toggleNavClick}>
                                    <Link to="/work">Work</Link>
                                </li>
                                <li className="footer-item" onClick={this.toggleNavClick}>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li className="footer-item" onClick={this.toggleNavClick}>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                        <h4>designed and developed by tyler berens</h4>
                    </div>
                </div>
            </div>
        );
    }
}