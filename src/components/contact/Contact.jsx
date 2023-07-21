import React from "react";
import { BiMailSend } from "react-icons/bi";
import { Form } from "react-bootstrap";
import { PiArrowRightBold } from "react-icons/pi";
import "./contact.css";
import "../style.css";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  window.onbeforeunload = () => {
    setTimeout(() => {
      for (const form of document.getElementsByTagName("form")) {
        form.reset();
      }
    }, 700);
  };
  return (
    <div className="py-3">
      <div
        className="d-flex justify-content-center align-items-center flex-column mt-5"
        id="contact"
      >
        <h2>Contact</h2>
        <p>Connect with me</p>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-2 text-center">
          <h5 className="offset-md-2">Talk to me</h5>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBnNVZrbllbNtHhGfzwcKGxPXtSnxhkSdggFGxjKrFKFQVXfpCHbJCMNTqQJLnkWtxwVNWQ"
            className="anchar-tag"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="contact-card offset-md-2 py-2"
              data-aos="flip-down"
              style={{ background: "#607D8B", border: "none", color: "white" }}
            >
              <span style={{ fontSize: "20px" }}>
                <BiMailSend />
              </span>

              <h5>Email</h5>
              <p className="m-0">pawankumar7310@gmail.com</p>
              <span className="arrow" role="button">
                view more <PiArrowRightBold />
              </span>
            </div>
          </a>

          <a
            className="anchar-tag"
            href="https://wa.link/q06ftl"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="contact-card offset-md-2 py-2 my-2"
              data-aos="flip-up"
              style={{ background: "#607D8B", border: "none", color: "white" }}
            >
              <span style={{ fontSize: "20px" }}>
                <BsWhatsapp />
              </span>

              <h5>Whatsapp</h5>
              <p className="m-0">+918285045537</p>
              <span className="arrow" role="button">
                view more <PiArrowRightBold />
              </span>
            </div>
          </a>
        </div>
        <div className="col-md-4 offset-md-2 m-auto input-container">
          <Form
            id="fs-frm"
            name="simple-contact-form"
            accept-charset="utf-8"
            action="https://formspree.io/f/mzblzeoe"
            method="post"
          >
            <Form.Group className="d-flex flex-column ">
              <Form.Label className="m-0">Name</Form.Label>
              <input
                className="inp"
                type="text"
                name="name"
                id="full-name"
                placeholder="Name"
                required=""
              />
            </Form.Group>
            <Form.Group className="d-flex flex-column">
              <Form.Label className="m-0">Email address</Form.Label>
              <input
                className="inp"
                type="email"
                name="Client email"
                id="email-address"
                placeholder="email"
                required=""
              />
            </Form.Group>
            <Form.Group className="d-flex flex-column">
              <Form.Label className="m-0">Message</Form.Label>
              <textarea
                className="inp"
                rows="6"
                name="message"
                id="message"
                placeholder="type your message"
                required=""
              ></textarea>
            </Form.Group>

            <div className="d-flex justify-content-center mt-2">
              <button className="buttons" type="submit" value="Submit">
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
