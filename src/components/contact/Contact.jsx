import React from "react";
import { BiMailSend } from "react-icons/bi";
import { Button, Form } from "react-bootstrap";
import { PiArrowRightBold } from "react-icons/pi";
import "./contact.css";
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
    <div className="my-5">
      <div
        className="d-flex justify-content-center align-items-center flex-column mt-5"
        id="contact"
      >
        <h2>Contact</h2>
        <p>What i offer</p>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-2 text-center">
          <h5 className="offset-md-2">Talk to me</h5>
          <div className="contact-card offset-md-2 py-2" data-aos="flip-down">
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBnNVZrbllbNtHhGfzwcKGxPXtSnxhkSdggFGxjKrFKFQVXfpCHbJCMNTqQJLnkWtxwVNWQ"
              className="font-icon"
            >
              <BiMailSend />
            </a>
            <h5>Email</h5>
            <p className="m-0">pawankumar7310@gmail.com</p>
            <span className="arrow" role="button">
              view more <PiArrowRightBold />
            </span>
          </div>

          <div
            className="contact-card offset-md-2 py-2 my-2"
            data-aos="flip-up"
          >
            <a href="https://wa.link/q06ftl" className="font-icon">
              <BsWhatsapp />
            </a>
            <h5>Whatsapp</h5>
            <p className="m-0">+918285045537</p>
            <span className="arrow" role="button">
              view more <PiArrowRightBold />
            </span>
          </div>
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
                placeholder="First and Last"
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
                placeholder="email@domain.tld"
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
              <Button className="buttons" type="submit" value="Submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
