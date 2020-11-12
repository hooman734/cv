import React from "react";
import DetailAdvancement from "./DetailAdvancement";

const Skill = function() {
  return (
    <div className="row">
      <div className="col-sm" style={{ paddingTop: "25px" }}>
        <div className="shadow-lg p-2 mb-2 badge-secondary rounded">
          <h3
            className="text text-left text-uppercase"
            id="Skill"
            style={{ padding: "5px" }}
          >
            developing skills
          </h3>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdvancement
              title="React js"
              advance="70"
              link="https://reactjs.org/"
            />
          </div>
          <div className="col-sm-6">
            <DetailAdvancement
              title="Angular js"
              advance="30"
              link="https://angularjs.org/"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdvancement
              title="Node js"
              advance="50"
              link="https://nodejs.org/en/"
            />
          </div>
          <div className="col-sm-6">
            <DetailAdvancement
              title="Express js"
              advance="50"
              link="https://expressjs.com/"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdvancement
              title="JAVA"
              advance="50"
              link="https://www.java.com/en/"
            />
          </div>
          <div className="col-sm-6">
            <DetailAdvancement
              title="mysql"
              advance="65"
              link="https://www.mysql.com/"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdvancement
              title="C++"
              advance="75"
              link="http://www.cplusplus.com/"
            />
          </div>
          <div className="col-sm-6">
            <DetailAdvancement
              title="Python"
              advance="70"
              link="https://www.python.org/"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdvancement
              title="Java Script"
              advance="70"
              link="https://www.javascript.com/"
            />
          </div>
          <div className="col-sm-6">
            <DetailAdvancement
              title="C#"
              advance="25"
              link="https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdvancement
              title="Koa js"
              advance="30"
              link="https://koajs.com/"
            />
          </div>
          <div className="col-sm-6">
            <DetailAdvancement
              title="Rust"
              advance="10"
              link="https://www.rust-lang.org/"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdvancement
              title="Lua"
              advance="40"
              link="http://www.lua.org/"
            />
          </div>
          <div className="col-sm-6">
            <DetailAdvancement
              title="Go"
              advance="60"
              link="http://golang.org/"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdvancement
              title="Vue"
              advance="60"
              link="https://vuejs.org/"
            />
          </div>
          <div className="col-sm-6">
            <DetailAdvancement
              title="Svelte"
              advance="40"
              link="https://svelte.dev/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
