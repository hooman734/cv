import React from "react";

const DetailAdvancement = function(props) {
  const { title, advance, link, context } = props;
  const progress = parseInt(advance);
  let bartype = "";
  if (progress < 30) {
    bartype = "bg-info";
  } else if (progress > 60) {
    bartype = "bg-success";
  }
  return (
    <div className="Header row shadow-lg p-1 mb-1 bg-white rounded">
      <div className="col-sm">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm">
                <a
                  className="text-decoration-none text-reset text-capitalize text-justify"
                  href={link || "#"}
                >
                  <h5 className="card-title font-weight-bold text-muted text-left text-uppercase text-justify">
                    {title}
                  </h5>
                  <hr />
                </a>
                <p className="card-text text-left text-wrap text-reset text-capitalize text-justify">
                  {context || ""}
                </p>
                <div className="progress">
                  <div
                    className={
                      "progress-bar progress-bar-striped progress-bar " +
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
      </div>
    </div>
  );
};

export default DetailAdvancement;
