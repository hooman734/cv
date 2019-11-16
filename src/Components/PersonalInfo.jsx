import React from "react";
import Detail from "./Detail";

const Personal_info = function() {
  return (
    <div className="row">
      <div className="col-sm" style={{ paddingTop: "25px" }}>
        <div className="shadow-lg p-2 mb-2 badge-secondary rounded">
          <h3
            className="text text-left text-uppercase"
            style={{ padding: "5px" }}
          >
            personal detailes
          </h3>
        </div>
        <Detail title="Birth Date" context="22/05/1981" />
        <Detail title="Nationality" context="Iranian" />
      </div>
    </div>
  );
};

export default Personal_info;
