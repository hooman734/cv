import React from "react";
import DetailAccomplished from "./DetailAccomplished";

const AccomplishedProject = function() {
  return (
    <div className="row">
      <div className="col-sm " style={{ paddingTop: "25px" }}>
        <div className="shadow-lg p-2 mb-2 badge-secondary rounded">
          <h3
            className="text text-left text-uppercase"
            id="AccomplishedProject"
            style={{ padding: "5px" }}
          >
            Finished Projects
          </h3>
        </div>
        <DetailAccomplished
          title="chess project"
          context=" implementing chess game field and pieces by Vanilla javascript"
          gitLink="https://github.com/hooman734/ChessProject"
        />
        <DetailAccomplished
          title="first page"
          context="a node js application like a registration page"
          gitLink="https://github.com/hooman734/firstPage"
          wwwLink="https://amir-vihan.herokuapp.com/"
        />
        <DetailAccomplished
          title="angular practice"
          context=" a practice of using angular framework"
          gitLink="https://github.com/hooman734/angularPractice1"
          wwwLink="https://angular-prac-1.herokuapp.com/"
        />
        <DetailAccomplished
          title="vidley"
          context="a recat js application as a practice"
          gitLink="https://github.com/hooman734/vidley"
        />
        <DetailAccomplished
          title="Video Player"
          context="a recat js application serves as a customized YouTube player"
          gitLink="https://github.com/hooman734/video_player"
          wwwLink="https://hooman734.github.io/video_player"
        />
      </div>
    </div>
  );
};

export default AccomplishedProject;
