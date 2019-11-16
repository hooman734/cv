import React from "react";

const DetailProgress = function(props) {
  const { title, subTitle, context, link, start, end } = props;
  return (
    <div className="Header row shadow-lg p-1 mb-1 bg-white rounded">
      <div className="col-sm">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm">
                <h5 className="card-title font-weight-bold text-muted text-left text-uppercase text-justify">
                  {title}
                </h5>
                <a
                  className="text-decoration-none text-reset text-capitalize text-justify"
                  href={link || "#"}
                >
                  <h5 className="card-title text-muted text-left text-capitalize text-justify">
                    {subTitle}
                  </h5>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-10">
                <p className="card-text text-left text-wrap text-reset text-capitalize text-justify">
                  {context}
                </p>
              </div>
              <div className="col-sm-2 text-capitalize text-justify">
                <h6>
                  <i className="fa fa-calendar-check" /> {start} - {end}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProgress;
