import React from "react";

const Detail = function(props) {
  const { title, context } = props;
  return (
    <div className="row">
      <div className="col-sm">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title font-weight-bold text-muted text-left text-uppercase text-justify">
              {title}
            </h3>
            <h4 className="card-text text-left text-wrap text-capitalize text-justify">
              {context}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
