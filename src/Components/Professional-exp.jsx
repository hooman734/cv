import React from "react";
import DetailProgress from "./Detail-progress";

const Professional_exp = function() {
  return (
    <div className="row">
      <div className="col-sm" style={{ paddingTop: "25px" }}>
        <div className="shadow-lg p-2 mb-2 badge-secondary rounded">
          <h3 className="text-left text-uppercase" style={{ padding: "5px" }}>
            professional experience
          </h3>
        </div>
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
    </div>
  );
};

export default Professional_exp;
