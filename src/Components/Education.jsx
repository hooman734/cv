import React from "react";
import DetailEdu from "./Detail-education";

const Education = function() {
  return (
    <div className="row">
      {" "}
      <div className="col-sm" style={{ paddingTop: "25px" }}>
        <h2
          className="badge-secondary text-uppercase"
          style={{ padding: "5px" }}
        >
          Education
        </h2>
        <DetailEdu
          title="Master of Science in Computer Science"
          context="American University of Armenia"
          link="https://aua.am"
          start="2017"
          end="Expected 2020"
        ></DetailEdu>
        <DetailEdu
          title="Bachelor of Science in civil engineering"
          context="azad university of iran"
          link="https://translate.google.com/translate?hl=en&sl=fa&u=http://gorganiau.ac.ir/&prev=search"
          start="2011"
          end="2014"
        ></DetailEdu>
        <DetailEdu
          title="Bachelor of Science in mechanical engineering"
          context="babol noshirvani university of technology"
          link="https://en.nit.ac.ir/"
          start="2011"
          end="2014"
        ></DetailEdu>
      </div>
    </div>
  );
};

export default Education;
