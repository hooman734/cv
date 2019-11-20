import React from "react";
import PersonalInfo from "./Components/PersonalInfo";
import ProfessionalExp from "./Components/ProfessionalExp";
import Education from "./Components/Education";
import Skill from "./Components/Skill";
import Knowledge from "./Components/Knowledge";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import AccomplishedProject from "./Components/AccomplishedProject";

import "./App.css";

function App() {
  return (
    <div className="container-fluid width-align-justify App">
      <div className="row">
        <Navbar />
      </div>
      <div className="row Component">
        <div className="col-sm-5">
          <PersonalInfo />
          <Contact />
          <Knowledge />
          <Skill />
        </div>

        <div className="col-sm-7">
          <Education />
          <ProfessionalExp />
          <AccomplishedProject />
        </div>
      </div>
      <div className="row-sm-10" >
        
      
      </div>
    </div>
  );}

export default App;
