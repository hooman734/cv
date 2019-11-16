import React from "react";
import DetailEducation from "./DetailEducation";

const Education = function() {
  return (
    <div className="row">
      {" "}
      <div className="col-sm" style={{ paddingTop: "25px" }}>
        <div className="shadow-lg p-2 mb-2 badge-secondary rounded">
          <h3 className="text-left text-uppercase" style={{ padding: "5px" }}>
            Education
          </h3>
        </div>
        <DetailEducation
          title="Master of Science in Computer Science"
          context="American University of Armenia"
          link="https://aua.am"
          start="2017"
          end="Expected 2020"
        />
        <DetailEducation
          title="Bachelor of Science in civil engineering"
          context="azad university of iran"
          link="https://translate.google.com/translate?hl=en&sl=fa&u=http://gorganiau.ac.ir/&prev=search"
          start="2011"
          end="2014"
        />
        <DetailEducation
          title="Bachelor of Science in Mechanical Engineering"
          context="Babol Noshirvani University of Technology"
          link="https://en.nit.ac.ir/"
          start="2011"
          end="2014"
        />
      </div>
    </div>
  );
};

export default Education;
