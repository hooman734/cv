import React from "react";
import DetailAdv from "./Detail-advancement";

const Skill = function() {
  return (
    <div className="row">
      <div className="col-sm" style={{ paddingTop: "25px" }}>
        <h2
          className="badge-secondary text-uppercase text-justify"
          style={{ padding: "5px" }}
        >
          developing skills
        </h2>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdv title="React js" advance="70"></DetailAdv>
          </div>
          <div className="col-sm-6">
            <DetailAdv title="Angular js" advance="30"></DetailAdv>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdv title="Node js" advance="50"></DetailAdv>
          </div>
          <div className="col-sm-6">
            <DetailAdv title="Express js" advance="50"></DetailAdv>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdv title="JAVA" advance="50"></DetailAdv>
          </div>
          <div className="col-sm-6">
            <DetailAdv title="mysql" advance="65"></DetailAdv>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdv title="C++" advance="75"></DetailAdv>
          </div>
          <div className="col-sm-6">
            <DetailAdv title="Python" advance="70"></DetailAdv>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdv title="Java Script" advance="70"></DetailAdv>
          </div>
          <div className="col-sm-6">
            <DetailAdv title="C#" advance="25"></DetailAdv>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DetailAdv title="Koa js" advance="30"></DetailAdv>
          </div>
          <div className="col-sm-6">
            <DetailAdv title="Rust" advance="10"></DetailAdv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
