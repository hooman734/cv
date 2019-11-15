import React from "react";

const Detail_advancement = function(props) {
  const { title, advance, link, context } = props;
  const progress = parseInt(advance);
  let bartype = "";
  if (progress < 30) {
    bartype = "bg-info";
  } else if (progress > 60) {
    bartype = "bg-success";
  }
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-sm">
            <a
              className="text-decoration-none text-reset text-capitalize"
              href={link || "#"}
            >
              <h3 className="card-title font-weight-bold text-muted text-left text-uppercase">
                {title}
              </h3>
            </a>
            <h4 className="card-text text-left text-wrap text-reset text-capitalize">
              {context || ""}
            </h4>
            <div className="progress">
              <div
                className={
                  "progress-bar progress-bar-striped progress-bar-animated " +
                  bartype
                }
                role="progressbar"
                style={{ width: advance + "%" }}
                aria-valuenow={{ width: advance + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {advance}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail_advancement;
