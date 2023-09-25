import React from "react";
import Navbar from "./Navbar";
import Songstable from "./Songstable";
import Artist from "./Artist";
import "./landing.css"
function Landingpage() {
  return (
    <div id="main-content">
      <Navbar />
      <Songstable />
      <Artist />
    </div>
  );
}

export default Landingpage;
