import React from "react";
import PersonalInfo from "./Components/PersonalInfo";
import ProfessionalExp from "./Components/ProfessionalExp";
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
        <Navbar />
      </div>
      <div className="row Component">
        <div className="col-sm-1"></div>
        <div className="col-sm-3">
          <PersonalInfo />
          <Contact />
          <Knowledge />
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-6">
          <Education />
          <ProfessionalExp />
          <Skill />
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
}

export default App;
