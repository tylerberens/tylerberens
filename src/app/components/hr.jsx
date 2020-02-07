import React from "react";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      backgroundColor: color,
      height: 1,
      width: "50%",
      margin: "50px auto",
      opacity: ".4"
    }}
  />
);

export default ColoredLine;
