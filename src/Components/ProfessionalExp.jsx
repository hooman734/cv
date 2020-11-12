import React from "react";
import DetailProgress from "./DetailProgress";

const ProfessionalExp = function() {
  return (
    <div className="row">
      <div className="col-sm" style={{ paddingTop: "25px" }}>
        <div className="shadow-lg p-2 mb-2 badge-secondary rounded">
          <h3
            className="text text-left text-uppercase"
            id="ProfessionalExp"
            style={{ padding: "5px" }}
          >
            professional experience
          </h3>
        </div>
        <DetailProgress
          title="graduate School Internship Project"
          subTitle="AUA"
          context={["Used Python, Tkinter to create a download-manager with chunking support and GUI S3 browser", "Used Node.js, Socket.IO, and React/Redux to create an online chat room with channel support", "Used .NET Core to create a public traffic transportation monitoring with route suggestions"]}
          link="https://aua.am/"
          start="Jun-2020"
          end="Sep-2020"
        />
        <DetailProgress
          title="civil supervisor"
          subTitle="parab firm in iran"
          context={["working as a civil supervisor engineer in residence at several shops"]}
          link="http://www.moujabfan.ir/"
          start="2014"
          end="2016"
        />
        <DetailProgress
          title="mechanical building installment specialist"
          subTitle="iran society of engineers"
          context={["working as a designer and supervisor for building installments, gas, water, and wastewater pipelines"]}
          link="http://www.golestannezam.ir/"
          start="2007"
          end="2016"
        />
        <DetailProgress
          title="mechanical supervisor"
          subTitle="rahsaz firm in iran"
          context={["working as a engineer in road and bridge construction projects"]}
          link=""
          start="2004"
          end="2016"
        />
      </div>
    </div>
  );
};

export default ProfessionalExp;
