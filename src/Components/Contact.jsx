import React from "react";
import DetailLink from "./DetailLink";

const Contact = function() {
  return (
    <div className="row">
      <div className="col-sm " style={{ paddingTop: "25px" }}>
        <div className="shadow-lg p-2 mb-2 badge-secondary rounded">
          <h3
            className="text text-left text-uppercase"
            id="Contact"
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
        />
        <DetailLink
          title="Email"
          context="hooman_hesamyan20@alumni.aua.am"
          link="mailto:hooman_hesamyan20@alumni.aua.am"
          icon="fa fa-envelope"
        />
        <DetailLink
          title="Mobile Phone"
          context=" +37477281774"
          link="tel: +37477281774"
          icon="fa fa-phone-square"
        />
        <DetailLink
          title="Address"
          context="Margaryan 45, Yerevan, Armenia"
          link="https://www.google.com/maps/place/Kievyan+St,+Yerevan,+Armenia/@40.1949348,44.4880106,17z/data=!4m2!3m1!1s0x406abd6d4556de9d:0xdaad543c0accedfd"
          icon="fa fa-map-marker"
        />
      </div>
    </div>
  );
};

export default Contact;
