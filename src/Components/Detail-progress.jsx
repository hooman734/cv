import React from "react";

const Detail_progress = function(props) {
  const { title, subTitle, context, link, start, end } = props;
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title font-weight-bold text-muted text-left text-uppercase">
          {title}
        </h3>
        <a
          className="text-decoration-none text-reset text-capitalize"
          href={link || "#"}
        >
          <h3 className="card-title text-muted text-left text-capitalize">
            {subTitle}
          </h3>
        </a>
        <div className="row">
          <div className="col-7">
            <h4 className="card-text text-left text-wrap text-reset text-capitalize">
              {context}
            </h4>
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

export default Detail_progress;
