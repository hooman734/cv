import React from "react";

const Detail = function(props) {
  const { title, context } = props;
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title font-weight-bold text-muted text-left text-uppercase">
          {title}
        </h3>
        <h4 className="card-text text-left text-wrap text-capitalize">
          {context}
        </h4>
      </div>
    </div>
  );
};

export default Detail;
