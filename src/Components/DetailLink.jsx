import React from "react";

const DetailLink = function(props) {
  const { title, context, link, icon } = props;
  return (
    <div className="Header row shadow-lg p-1 mb-1 bg-white rounded">
      <div className="col-sm">
        <div className="card">
          <div className="card-body">
            <a
              className="text-decoration-none"
              href={link || "#"}
            >
              <h5 className="card-title font-weight-bold text-muted text-left text-uppercase text-justify">
                {title}
              </h5>
            </a>
            <a
              className="text-decoration-none text-reset"
              href={link || "#"}
            >
              <p className="card-text text-left text-wrap text-capitalize text-justify">
                <i className={icon || ""} /> {context}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLink;
