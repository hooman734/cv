import React from "react";

const Detail_education = function(props) {
  const { title, context, link, start, end } = props;
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <h3 className="card-title font-weight-bold text-muted text-left text-uppercase">
            {title}
          </h3>
        </div>
        <div className="row">
          <div className="col-7">
            <a
              className="text-decoration-none text-reset text-capitalize"
              href={link || "#"}
            >
              <h4 className="card-text text-left text-wrap text-reset text-capitalize">
                {context}
              </h4>
            </a>
          </div>
          <div className="col-5 text-capitalize">
            <h4>
              {start} - {end}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail_education;
