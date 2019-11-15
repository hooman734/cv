import React from "react";
import DetailAdv from "./Detail-advancement";

const Skill = function() {
  return (
    <div className="row">
      <div className="col-sm" style={{ paddingTop: "25px" }}>
        <div className="shadow-lg p-2 mb-2 badge-secondary rounded">
          <h3 className="text-left text-uppercase" style={{ padding: "5px" }}>
            developing skills
          </h3>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdv
              title="React js"
              advance="70"
              link="https://reactjs.org/"
            ></DetailAdv>
          </div>
          <div className="col-sm-6">
            <DetailAdv
              title="Angular js"
              advance="30"
              link="https://angularjs.org/"
            ></DetailAdv>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdv
              title="Node js"
              advance="50"
              link="https://nodejs.org/en/"
            ></DetailAdv>
          </div>
          <div className="col-sm-6">
            <DetailAdv
              title="Express js"
              advance="50"
              link="https://expressjs.com/"
            ></DetailAdv>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdv
              title="JAVA"
              advance="50"
              link="https://www.java.com/en/"
            ></DetailAdv>
          </div>
          <div className="col-sm-6">
            <DetailAdv
              title="mysql"
              advance="65"
              link="https://www.mysql.com/"
            ></DetailAdv>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdv
              title="C++"
              advance="75"
              link="http://www.cplusplus.com/"
            ></DetailAdv>
          </div>
          <div className="col-sm-6">
            <DetailAdv
              title="Python"
              advance="70"
              link="https://www.python.org/"
            ></DetailAdv>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdv
              title="Java Script"
              advance="70"
              link="https://www.javascript.com/"
            ></DetailAdv>
          </div>
          <div className="col-sm-6">
            <DetailAdv
              title="C#"
              advance="25"
              link="https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/"
            ></DetailAdv>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdv
              title="Koa js"
              advance="30"
              link="https://koajs.com/"
            ></DetailAdv>
          </div>
          <div className="col-sm-6">
            <DetailAdv
              title="Rust"
              advance="10"
              link="https://www.rust-lang.org/"
            ></DetailAdv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
