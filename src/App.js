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
    <div className="container-fluid App">
      <div className="row">
        <Navbar></Navbar>
      </div>
      <div className="row Component">
        <div className="col-3">
          <Personal_info></Personal_info>
          <Contact></Contact>
          <Knowledge></Knowledge>
        </div>
        <div className="col-9">
          <Education></Education>
          <Professional_exp></Professional_exp>
          <Skill></Skill>
        </div>
      </div>
    </div>
  );
}

export default App;
