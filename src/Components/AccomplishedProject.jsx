import React from "react";
import DetailLink from "./DetailLink";

const AccomplishedProject = function() {
  return (
    <div className="row">
      <div className="col-sm " style={{ paddingTop: "25px" }}>
        <div className="shadow-lg p-2 mb-2 badge-secondary rounded">
          <h3
            className="text text-left text-uppercase"
            style={{ padding: "5px" }}
          >
            Accomplished Projects
          </h3>
        </div>
        <DetailLink
          title="chess project"
          context=" implementing chess game field and pieces by Vanilla javascript"
          link="https://github.com/hooman734/ChessProjectFinall"
          icon="fa fa-git-square"
        />
        <DetailLink
          title="angular practice"
          context=" a practice of using angular framework"
          link="https://github.com/hooman734/angularPractice1"
          icon="fa fa-git-square"
        />
        <DetailLink
          title="vidley"
          context="a recat js application as a practice"
          link="https://github.com/hooman734/vidley"
          icon="fa fa-git-square"
        />
      </div>
    </div>
  );
};

export default AccomplishedProject;
