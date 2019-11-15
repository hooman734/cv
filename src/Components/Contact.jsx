import React from "react";
import DetailLink from "./Detail-link";

const Contact = function() {
  return (
    <div className="row">
      <div className="col-sm" style={{ paddingTop: "25px" }}>
        <h2
          className="badge-secondary text-uppercase"
          style={{ padding: "5px" }}
        >
          Contact
        </h2>
        <DetailLink
          title="Email"
          context="hesamyan@gmail.com"
          link="mailto:hesamyan@gmail.com"
        ></DetailLink>
        <DetailLink
          title="Mobile Phone"
          context="tel: +37477281"
          link="tel: +37477281"
        ></DetailLink>
        <DetailLink
          title="Address"
          context="Armenia, Kievyan Ave."
        ></DetailLink>
      </div>
    </div>
  );
};

export default Contact;
