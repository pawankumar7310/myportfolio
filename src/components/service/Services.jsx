import React from "react";
import { CgWebsite } from "react-icons/cg";
import { PiArrowRightBold } from "react-icons/pi";
import "./service.css";
import { FaFigma } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { VscVerified } from "react-icons/vsc";

import { useState } from "react";

import Modal from "react-bootstrap/Modal";
function Services(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center flex-column mt-5"
        id="services"
      >
        <h2>Services</h2>
        <p>What i offer</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-5">
        <div
          className="service_card"
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
        >
          <CgWebsite />
          <h6 className="m-0 py-3 pe-2">Web Developer</h6>
          <span className="arrow" onClick={handleShow}>
            view more <PiArrowRightBold />
          </span>
        </div>

        <div className="service_card" data-aos="flip-left">
          <FaFigma />
          <h6 className="m-0 py-3">UI/UX Developer</h6>
          <span className="arrow" onClick={handleShow}>
            view more <PiArrowRightBold />
          </span>
        </div>

        <div
          className="service_card"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <SiReact />
          <h6 className="m-0 py-3">React Developer</h6>
          <span className="arrow" onClick={handleShow}>
            view more <PiArrowRightBold />
          </span>
        </div>
      </div>

      <>
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title className="ps-5 m-auto">
              <h3>FrontEnd Developer</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex align-items-center py-2">
              <VscVerified />
              <p className="ps-2 m-0">I develop user flow Chart</p>
            </div>

            <div className="d-flex align-items-center py-2">
              <VscVerified />
              <p className="ps-2 m-0">I develop ui/ux</p>
            </div>

            <div className="d-flex align-items-center py-2">
              <VscVerified />
              <p className="ps-2 m-0">web page Development</p>
            </div>
            <div className="d-flex align-items-center py-2">
              <VscVerified />
              <p className="ps-2 m-0">Suggest for best market Demand</p>
            </div>
            <div className="d-flex align-items-center py-2">
              <VscVerified />
              <p className="ps-2 m-0">Responsive design for all device</p>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </>
  );
}

export default Services;
