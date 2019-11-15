import React from "react";

const Detail_education = function(props) {
  const { title, context, link, start, end } = props;
  return (
    <div className="row shadow-lg p-1 mb-1 bg-white rounded">
      <div className="col-sm">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm">
                <h5 className="card-title font-weight-bold text-muted text-left text-uppercase text-justify">
                  {title}
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <div className="row">
                  <div className="col-sm-7">
                    <a
                      className="text-decoration-none text-reset text-capitalize text-justify"
                      href={link || "#"}
                      target="_blank"
                    >
                      <p className="card-text text-left text-wrap text-reset text-capitalize text-justify">
                        {context}
                      </p>
                    </a>
                  </div>
                  <div className="col-sm-5 text-capitalize">
                    <h6>
                      <i className="fa fa-calendar-check" /> {start} - {end}
                    </h6>
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

export default Detail_education;
