import React from "react";
import Detail from "./Detail";

const Personal_info = function() {
  return (
    <div>
      <h2 className="badge-secondary text-uppercase">Personal Details</h2>
      <Detail title="Birth Date" context="22/05/1981"></Detail>
      <Detail title="Nationality" context="Iranian"></Detail>
      <Detail title="Address" context="Armenia, Kievyan Ave."></Detail>
    </div>
  );
};

export default Personal_info;
