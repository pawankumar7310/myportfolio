import React from "react";
import "./footer.css";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <div className="py-5 footer d-flex justify-content-evenly w-100">
      <ul className="d-flex p-0">
        <li>
          <HashLink smooth to="#home" style={{ color: "white" }}>
            {" "}
            Home
          </HashLink>
        </li>

        <li>
          <HashLink smooth to="#services" style={{ color: "white" }}>
            {" "}
            Service
          </HashLink>
        </li>

        <li>
          <HashLink smooth to="#about" style={{ color: "white" }}>
            {" "}
            About
          </HashLink>
        </li>
      </ul>
      <ul className="d-flex">
        <li>
          {" "}
          <a
            href="https://www.instagram.com/pawan_ncr/"
            target="_blank"
            style={{ color: "white" }}
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
        </li>
        <li className="mx-2">
          <a
            href="https://www.linkedin.com/in/pawan-kumar-7439561a0/"
            target="_blank"
            style={{ color: "white" }}
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/pawankumar7310"
            target="_blank"
            style={{ color: "white" }}
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </li>
      </ul>
    </div>
  );
}
