import React from "react";
import DetailLink from "./Detail-link";

const Contact = function() {
  return (
    <div className="row">
      <div className="col-sm " style={{ paddingTop: "25px" }}>
        <div className="shadow-lg p-2 mb-2 badge-secondary rounded">
          <h3
            className="text text-left text-uppercase"
            style={{ padding: "5px" }}
          >
            Contact
          </h3>
        </div>
        <DetailLink
          title="Email"
          context="hesamyan@gmail.com"
          link="mailto:hesamyan@gmail.com"
          icon="fa fa-envelope"
        ></DetailLink>
        <DetailLink
          title="Mobile Phone"
          context=" +37477281734"
          link="tel: +37477281734"
          icon="fa fa-phone-square"
        ></DetailLink>
        <DetailLink
          title="Address"
          context="Armenia, Kievyan Ave."
          link="https://www.google.com/maps/place/Kievyan+St,+Yerevan,+Armenia/@40.1949348,44.4880106,17z/data=!4m2!3m1!1s0x406abd6d4556de9d:0xdaad543c0accedfd"
          icon="fa fa-map-marker"
        ></DetailLink>
      </div>
    </div>
  );
};

export default Contact;
