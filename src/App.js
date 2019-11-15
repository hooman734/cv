import React from "react";
import Personal_info from "./Components/Personal-info";
import Professional_exp from "./Components/Professional-exp";
import Education from "./Components/Education";
import Skill from "./Components/Skill";
import Knowledge from "./Components/Knowledge";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="container-fluid width-align-justify App">
      <div className="row-sm-12">
        <Navbar></Navbar>
      </div>
      <div className="row Component">
        <div className="col-sm-1"></div>
        <div className="col-sm-3">
          <Personal_info></Personal_info>
          <Contact></Contact>
          <Knowledge></Knowledge>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-6">
          <Education></Education>
          <Professional_exp></Professional_exp>
          <Skill></Skill>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
}

export default App;
