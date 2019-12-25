import React from "react";
import PersonalInfo from "./Components/PersonalInfo";
import ProfessionalExp from "./Components/ProfessionalExp";
import Education from "./Components/Education";
import Skill from "./Components/Skill";
import Knowledge from "./Components/Knowledge";
import Contact from "./Components/Contact";
import NavbarComp from "./Components/NavbarComp";
import AccomplishedProject from "./Components/AccomplishedProject";

import "./App.css";

function App() {
  return (
    <div className="container-fluid width-align-justify App">
      <NavbarComp />
      <div className="row Component">
        <div className="col-sm-5">
          <PersonalInfo id="PersonalInfo" />
          <Contact id="Contact" />
          <Knowledge id="Knowledge" />
          <Skill id="Skill" />
        </div>

        <div className="col-sm-7">
          <Education id="Education" />
          <ProfessionalExp id="ProfessionalExp" />
          <AccomplishedProject id="AccomplishedProject" />
        </div>
      </div>
      <div className="row-sm-10"></div>
    </div>
  );
}

export default App;
