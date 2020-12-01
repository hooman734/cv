import React from "react";
import DetailAdvancement from "./DetailAdvancement";

const Knowledge = function() {
  return (
    <div className="row">
      <div className="col-sm" style={{ paddingTop: "25px" }}>
        <div className="shadow-lg p-2 mb-2 badge-secondary rounded">
          <h3
            className="text text-left text-uppercase"
            id="Knowledge"
            style={{ padding: "5px" }}
          >
            knowledge
          </h3>
        </div>
        <DetailAdvancement
          title="English Proficiency"
          context="IELTS General: 6.5"
          advance="73"
        />
      </div>
    </div>
  );
};

export default Knowledge;
