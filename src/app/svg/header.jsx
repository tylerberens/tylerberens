import React, { Component } from "react";
import "./header.scss";

export class header extends Component {
  render() {
    return (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="115%"
          viewBox="0 0 2156.776 724.75"
        >
          <defs>
            <filter
              id="Path_21"
              x="0"
              y="0"
              width="2156.776"
              height="724.75"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="-18" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="25.5" result="blur" />
              <feFlood flood-color="#7d7d7d" flood-opacity="0.078" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_21)">
            <path
              id="Path_21-2"
              data-name="Path 21"
              d="M0,4.643S387.313-56.5,998.089,34.582s991.172-21.431,991.172-21.431l-114.3-312.532s-89.295,678.641-583.988,557.2S-14.514,241.746-14.514,241.746Z"
              transform="translate(91.01 393.88)"
              fill="#1d1d1d"
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default header;
