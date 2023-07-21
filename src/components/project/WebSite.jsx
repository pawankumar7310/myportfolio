import React from "react";

import Card from "react-bootstrap/Card";
import { PiArrowRightBold } from "react-icons/pi";

export default function WebSite() {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-6 mb-2">
        <Card style={{ width: "18rem", margin: "auto" }}>
          <div className="mob m-0 p-2"></div>
          <a
            href="https://pawankumar7310.github.io/mob/"
            className="anchar-tag"
            target="_blank"
          >
            <Card.Body>
              <Card.Title>Mob app</Card.Title>
              Demo <PiArrowRightBold />
            </Card.Body>
          </a>
        </Card>
      </div>

      <div className="col-lg-4 col-md-6 ">
        <Card style={{ width: "18rem", margin: "auto" }}>
          <div className="roof m-0 p-2"></div>
          <a
            href="https://pawankumar7310.github.io/roof.github.io/"
            className="anchar-tag"
            target="_blank"
          >
            <Card.Body>
              <Card.Title>Roof Repair</Card.Title>
              Demo <PiArrowRightBold />
            </Card.Body>
          </a>
        </Card>
      </div>
    </div>
  );
}
