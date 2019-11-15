import React from "react";
import DetailAdv from "./Detail-advancement";

const Proficiency = function() {
  return (
    <div className="row">
      <div className="col-sm" style={{ paddingTop: "25px" }}>
        <div className="shadow-lg p-2 mb-2 badge-secondary rounded">
          <h3
            className="text text-left text-uppercase"
            style={{ padding: "5px" }}
          >
            knowledge
          </h3>
        </div>
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
