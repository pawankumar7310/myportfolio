import React from "react";

import Card from "react-bootstrap/Card";
import { PiArrowRightBold } from "react-icons/pi";

export default function ReactProject() {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-6  mb-2">
        <Card style={{ width: "18rem", margin: "auto" }}>
          <div className="worldmap m-0 p-2"></div>
          <a
            href="https://world-country-details-api.netlify.app/"
            className="anchar-tag"
            target="_blank"
          >
            <Card.Body>
              <Card.Title>World map</Card.Title>
              Demo <PiArrowRightBold />
            </Card.Body>
          </a>
        </Card>
      </div>

      <div className="col-lg-4 col-md-6 mb-2">
        <Card style={{ width: "18rem", margin: "auto" }}>
          <div className="youtube m-0 p-2"></div>
          <a
            href="https://responsive-curd-operation.netlify.app/"
            className="anchar-tag"
            target="_blank"
          >
            <Card.Body>
              <Card.Title>Crud Thumbnail youtube</Card.Title>
              Demo <PiArrowRightBold />
            </Card.Body>
          </a>
        </Card>
      </div>
    </div>
  );
}
