import React from "react";
import ReactDOM from "react-dom";

/*
everything in the curly brackets
must be the same as in teh math file
*/
import pi, { doublePi, triplePi } from "./math";
/*     ^   
can be anything we call it
*/

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
