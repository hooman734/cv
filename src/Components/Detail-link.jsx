import React from "react";

const Detail_link = function(props) {
  const { title, context, link } = props;
  return (
    <div className="row">
      <div className="col-sm">
        <div className="card">
          <div className="card-body">
            <a className="text-decoration-none" href={link || "#"}>
              <h3 className="card-title font-weight-bold text-muted text-left text-uppercase text-justify">
                {title}
              </h3>
            </a>
            <a className="text-decoration-none" href={link || "#"}>
              <h4 className="card-text text-left text-wrap text-capitalize text-justify">
                {context}
              </h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail_link;
