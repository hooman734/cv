import React from "react";
import DetailProgress from "./Detail-progress";

const Professional_exp = function() {
  return (
    <div style={{ "padding-top": "25px" }}>
      <h2 className="badge-secondary text-uppercase" style={{ padding: "5px" }}>
        professional experience
      </h2>
      <DetailProgress
        title="civil supervisor"
        subTitle="parab firm in iran"
        context="working as a civil supervisor engineer in residence at several shops"
        link="http://www.moujabfan.ir/"
        start="2014"
        end="2016"
      ></DetailProgress>
      <DetailProgress
        title="mechanical building installment specialist"
        subTitle="iran society of engineers"
        context="working as a designer and supervisor for building installments, gas, water, and wastewater pipelines"
        link="http://www.golestannezam.ir/"
        start="2007"
        end="2016"
      ></DetailProgress>
      <DetailProgress
        title="mechanical supervisor"
        subTitle="rahsaz firm in iran"
        context="working as a engineer in road and bridge construction projects"
        link=""
        start="2004"
        end="2016"
      ></DetailProgress>
    </div>
  );
};

export default Professional_exp;
