import React from "react";

const DetailAccompplished = function(props) {
  const { title, context, gitLink, wwwLink } = props;
  return (
    <div className="Header row shadow-lg p-1 mb-1 bg-white rounded">
      <div className="col-sm">
        <div className="card">
          <div className="card-body">
            <a className="text-decoration-none" href={wwwLink || "#"}>
              <h5 className="card-title font-weight-bold text-muted text-left text-uppercase text-justify">
                {title}
              </h5>
            </a>
            <hr />
            <a
              className="text-decoration-none text-reset"
              href={gitLink || "#"}
            >
              <p className="card-text text-left text-wrap text-capitalize text-justify">
                <i className="fa fa-git-square" /> {context}
              </p>
            </a>

            <a
              className="text-decoration-none text-reset"
              href={wwwLink || "#"}
              hidden={wwwLink == null ? true : false}
            >
              <p
                className="card-text text-left text-wrap text-capitalize text-justify"
                style={{ paddingTop: "0.5rem" }}
              >
                <i className="fa fa-chrome" /> Go to the{" "}
                <em>
                  <mark>{title}</mark>
                </em>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAccompplished;
