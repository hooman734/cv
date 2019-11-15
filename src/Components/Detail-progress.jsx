import React from "react";

const Detail_progress = function(props) {
  const { title, subTitle, context, link, start, end } = props;
  return (
    <div className="row">
      <div className="col-sm">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm">
                <h3 className="card-title font-weight-bold text-muted text-left text-uppercase text-justify">
                  {title}
                </h3>
                <a
                  className="text-decoration-none text-reset text-capitalize text-justify"
                  href={link || "#"}
                >
                  <h3 className="card-title text-muted text-left text-capitalize text-justify">
                    {subTitle}
                  </h3>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-7">
                <h4 className="card-text text-left text-wrap text-reset text-capitalize text-justify">
                  {context}
                </h4>
              </div>
              <div className="col-sm-5 text-capitalize text-justify">
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

export default Detail_progress;
