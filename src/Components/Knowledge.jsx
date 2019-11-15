import React from "react";
import DetailAdv from "./Detail-advancement";

const Proficiency = function() {
  return (
    <div className="row">
      <div className="col-sm" style={{ paddingTop: "25px" }}>
        <h2
          className="badge-secondary text-uppercase"
          style={{ padding: "5px" }}
        >
          Knowledge
        </h2>
        <DetailAdv
          title="English Proficiency"
          context="B2 certificate"
          advance="80"
        ></DetailAdv>
      </div>
    </div>
  );
};

export default Proficiency;
