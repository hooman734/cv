import React from "react";

const Detail_link = function(props) {
  const { title, context, link } = props;
  return (
    <div className="card">
      <div className="card-body">
        <a className="text-decoration-none" href={link || "#"}>
          <h3 className="card-title font-weight-bold text-muted text-left text-uppercase">
            {title}
          </h3>
        </a>
        <h4 className="card-text text-left text-wrap text-capitalize">
          {context}
        </h4>
      </div>
    </div>
  );
};

export default Detail_link;
