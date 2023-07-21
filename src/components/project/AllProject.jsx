import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { PiArrowRightBold } from "react-icons/pi";
import "./project.css";
// import { worldmap } from "../../../public/assets/worldmap.png";

export default function AllProject() {
  return (
    <>
      <div className="row m-auto">
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

        <div className="col-lg-4 col-md-6  mb-2">
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

        <div className="col-lg-4 col-md-6 mb-2">
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
    </>
  );
}
