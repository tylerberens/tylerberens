import React, { Component } from "react";
import "./work.scss";
import Header from './header';
import { Link } from "react-router-dom";
import  cwc  from "./mycentral.png";
import  tlc  from "./tlc.PNG";
import  ofv  from "./over.PNG";
import  lr  from "./myla.PNG";

export class work extends Component {
  render() {
    return (
      <React.Fragment>
      <div id="work">
        <div className="container-fluid" >
        <div id="headerContainer" className="row">
          <Header />
          <div id="sidelinks">
            <Link to="/" className="line1">
                    <li>Home</li>
            </Link>
            <li className="line2">Work</li>
          </div>
              <div className="col-12">
                <h1>work</h1>
          </div>
        </div>
        </div>
          <div id="templates" className="container">
            <div className="row">
                  <div className="chicken1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100vw" viewBox="0 0 2021.771 788.28">
                        <path id="Path_45" data-name="Path 45" d="M5563,1238.039s-41.913-234.377-690.417-176.538c-71.252,6.671-394.852,225.682-631.119,265.375s-486.2,35.159-599.609,55.95-162.777,355.344,25.009,425.657,282.759-161.223,686.119-158.394c300.532,98.287,503.7,195.188,659.659,190.337C5486.676,1825.683,5563,1577.508,5563,1577.508Z" transform="translate(-3541.229 -1052.321)" fill="rgba(19,19,19,0.39)"/>
                      </svg>
                  </div>
                  <div className="cards col-md-12 col-lg-6">
                      <img alt="" className="card1" src={cwc} />
                      <img alt="" className="card2" src={tlc} />
                      <img alt="" className="card3" src={lr} />
                      <img alt="" className="card4" src={ofv} />
                  </div>
                  <div className="text-right col-md-12 col-lg-6">
                      <h3>Matching Templates</h3>
                      <h4>Built ASP.NET templates to match existing websites</h4>
                      <h4>Custom featured side navigation</h4>
                      <h4>Redesigned UI of many tools</h4>
                      <h4>Included multiple color</h4>
                  </div>
            </div>
          </div>
          <div id="pathfinder" className="container">
              <div className="row">
                    <div className="chicken2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100vw" viewBox="0 0 2107.555 856.995">
                          <path id="Path_44" data-name="Path 44" d="M5469.963,1036.755c-1.565-.055-489.9-249.8-790.06-102.382s-337.031,175.588-456.037,208.453c-298.279,93.463-681.081-100.713-737.558-59-121.745,89.922,2.869,233.057-12.608,361.059-10.169,84.1,313.866-63.833,654.609-64.4s205.568,181.7,527.248,251.1,505.937,58.176,730.325-90.841S5471.529,1036.81,5469.963,1036.755Z" transform="matrix(-0.999, 0.035, -0.035, -0.999, 5568.817, 1551.838)" fill="#0d0d0d"/>
                        </svg>
                    </div>
                    <div className="text-left col-md-12 col-lg-6">
                      <h3>Pathfinder Visualization</h3>
                      <h4>What did I learn</h4>
                    </div>
                    <div className="col-md-12 col-lg-6">

                    </div>
              </div>
          </div>
        </div>
        </React.Fragment>
    );
  }
}

export default work;
