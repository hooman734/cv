import React from "react";

const Detail = function(props) {
  const { title, context } = props;
  return (
    <div className="Header row shadow-lg p-1 mb-1 bg-white rounded">
      <div className="col-sm">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title font-weight-bold text-muted text-left text-uppercase text-justify">
              {title}
            </h5>
            <hr />
            <p className="card-text text-left text-wrap text-capitalize text-justify">
              {context}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
