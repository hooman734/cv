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
                <hr />
                <a
                  className="text-decoration-none text-reset text-capitalize text-justify"
                  href={link || "#"}
                >
                  <em>
                    <h5 className="card-title text-muted text-left text-capitalize text-justify">
                      {subTitle}
                    </h5>
                  </em>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-9">
                {context.map(item => (
                  <li className="card-title text-muted text-left text-capitalize text-justify">
                   {item}
                  </li>
                ))}
              </div>
              <div className="col-sm-3 text-capitalize text-justify">
                <h6>
                  <mark>
                    <i className="fa fa-calendar-check" /> {start} - {end}
                  </mark>
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
