import React from "react";

const Detail_education = function(props) {
  const { title, context, link, start, end } = props;
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-sm">
            <h3 className="card-title font-weight-bold text-muted text-left text-uppercase text-justify">
              {title}
            </h3>
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
                  <h4 className="card-text text-left text-wrap text-reset text-capitalize text-justify">
                    {context}
                  </h4>
                </a>
              </div>
              <div className="col-sm-5 text-capitalize">
                <h4>
                  {start} - {end}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail_education;
