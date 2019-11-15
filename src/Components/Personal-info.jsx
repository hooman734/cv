import React from "react";
import Detail from "./Detail";

const Personal_info = function() {
  return (
    <div className="row">
      <div className="col-sm" style={{ paddingTop: "25px" }}>
        <h2
          className="badge-secondary text-uppercase"
          style={{ padding: "5px" }}
        >
          Personal Details
        </h2>
        <Detail title="Birth Date" context="22/05/1981"></Detail>
        <Detail title="Nationality" context="Iranian"></Detail>
        <Detail title="Address" context="Armenia, Kievyan Ave."></Detail>
      </div>
    </div>
  );
};

export default Personal_info;
