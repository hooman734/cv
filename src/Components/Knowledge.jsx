import React from "react";
import DetailAdv from "./Detail-advancement";

const Proficiency = function() {
  return (
    <div style={{ "padding-top": "25px" }}>
      <h2 className="badge-secondary text-uppercase" style={{ padding: "5px" }}>
        Knowledge
      </h2>
      <DetailAdv
        title="English Proficiency"
        context="B2 certificate"
        advance="80"
      ></DetailAdv>
    </div>
  );
};

export default Proficiency;
